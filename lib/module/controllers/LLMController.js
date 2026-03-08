"use strict";

import { ResourceFetcher } from '../utils/ResourceFetcher';
import { Template } from '@huggingface/jinja';
import { DEFAULT_CHAT_CONFIG } from '../constants/llmDefaults';
import { SPECIAL_TOKENS } from '../types/llm';
import { parseToolCall } from '../utils/llm';
import { Logger } from '../common/Logger';
import { RnExecutorchError, parseUnknownError } from '../errors/errorUtils';
import { RnExecutorchErrorCode } from '../errors/ErrorCodes';
export class LLMController {
  chatConfig = DEFAULT_CHAT_CONFIG;
  _isReady = false;
  _isGenerating = false;
  _messageHistory = [];

  // User callbacks

  constructor({
    tokenCallback,
    messageHistoryCallback,
    isReadyCallback,
    isGeneratingCallback
  }) {
    this.tokenCallback = token => {
      tokenCallback?.(token);
    };
    this.messageHistoryCallback = messageHistory => {
      this._messageHistory = messageHistory;
      messageHistoryCallback?.(messageHistory);
    };
    this.isReadyCallback = isReady => {
      this._isReady = isReady;
      isReadyCallback?.(isReady);
    };
    this.isGeneratingCallback = isGenerating => {
      this._isGenerating = isGenerating;
      isGeneratingCallback?.(isGenerating);
    };
  }
  get isReady() {
    return this._isReady;
  }
  get isGenerating() {
    return this._isGenerating;
  }
  get messageHistory() {
    return this._messageHistory;
  }
  async load({
    modelSource,
    tokenizerSource,
    tokenizerConfigSource,
    onDownloadProgressCallback
  }) {
    // reset inner state when loading new model
    this.messageHistoryCallback(this.chatConfig.initialMessageHistory);
    this.isGeneratingCallback(false);
    this.isReadyCallback(false);
    try {
      const tokenizersPromise = ResourceFetcher.fetch(undefined, tokenizerSource, tokenizerConfigSource);
      const modelPromise = ResourceFetcher.fetch(onDownloadProgressCallback, modelSource);
      const [tokenizersResults, modelResult] = await Promise.all([tokenizersPromise, modelPromise]);
      const tokenizerPath = tokenizersResults?.[0];
      const tokenizerConfigPath = tokenizersResults?.[1];
      const modelPath = modelResult?.[0];
      if (!tokenizerPath || !tokenizerConfigPath || !modelPath) {
        throw new RnExecutorchError(RnExecutorchErrorCode.DownloadInterrupted, 'The download has been interrupted. As a result, not every file was downloaded. Please retry the download.');
      }
      this.tokenizerConfig = JSON.parse(await ResourceFetcher.fs.readAsString(tokenizerConfigPath));
      this.nativeModule = await global.loadLLM(modelPath, tokenizerPath);
      this.isReadyCallback(true);
      this.onToken = data => {
        if (!data) {
          return;
        }
        const filtered = this.filterSpecialTokens(data);
        if (filtered.length === 0) {
          return;
        }
        this.tokenCallback(filtered);
      };
    } catch (e) {
      Logger.error('Load failed:', e);
      this.isReadyCallback(false);
      throw parseUnknownError(e);
    }
  }
  setTokenCallback(tokenCallback) {
    this.tokenCallback = tokenCallback;
  }
  configure({
    chatConfig,
    toolsConfig,
    generationConfig
  }) {
    this.chatConfig = {
      ...DEFAULT_CHAT_CONFIG,
      ...chatConfig
    };
    this.toolsConfig = toolsConfig;
    if (generationConfig?.outputTokenBatchSize) {
      this.nativeModule.setCountInterval(generationConfig.outputTokenBatchSize);
    }
    if (generationConfig?.batchTimeInterval) {
      this.nativeModule.setTimeInterval(generationConfig.batchTimeInterval);
    }
    if (generationConfig?.temperature) {
      this.nativeModule.setTemperature(generationConfig.temperature);
    }
    if (generationConfig?.topp) {
      if (generationConfig.topp < 0 || generationConfig.topp > 1) {
        throw new RnExecutorchError(RnExecutorchErrorCode.InvalidConfig, 'Top P has to be in range [0, 1]');
      }
      this.nativeModule.setTopp(generationConfig.topp);
    }

    // reset inner state when loading new configuration
    this.messageHistoryCallback(this.chatConfig.initialMessageHistory);
    this.isGeneratingCallback(false);
  }
  filterSpecialTokens(text) {
    let filtered = text;
    if (SPECIAL_TOKENS.EOS_TOKEN in this.tokenizerConfig && this.tokenizerConfig.eos_token) {
      filtered = filtered.replaceAll(this.tokenizerConfig.eos_token, '');
    }
    if (SPECIAL_TOKENS.PAD_TOKEN in this.tokenizerConfig && this.tokenizerConfig.pad_token) {
      filtered = filtered.replaceAll(this.tokenizerConfig.pad_token, '');
    }
    return filtered;
  }
  delete() {
    if (this._isGenerating) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModelGenerating, 'You cannot delete the model now. You need ot interrupt it first.');
    }
    this.onToken = () => {};
    if (this.nativeModule) {
      this.nativeModule.unload();
    }
    this.isReadyCallback(false);
    this.isGeneratingCallback(false);
  }
  async forward(input) {
    if (!this._isReady) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModuleNotLoaded, 'The model is currently not loaded. Please load the model before calling forward().');
    }
    if (this._isGenerating) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModelGenerating, 'The model is currently generating. Please wait until previous model run is complete.');
    }
    try {
      this.isGeneratingCallback(true);
      this.nativeModule.reset();
      const response = await this.nativeModule.generate(input, this.onToken);
      return this.filterSpecialTokens(response);
    } catch (e) {
      throw parseUnknownError(e);
    } finally {
      this.isGeneratingCallback(false);
    }
  }
  interrupt() {
    if (!this.nativeModule) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModuleNotLoaded, "Cannot interrupt a model that's not loaded.");
    }
    this.nativeModule.interrupt();
  }
  getGeneratedTokenCount() {
    if (!this.nativeModule) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModuleNotLoaded, "Cannot get token count for a model that's not loaded.");
    }
    return this.nativeModule.getGeneratedTokenCount();
  }
  getPromptTokenCount() {
    if (!this.nativeModule) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModuleNotLoaded, "Cannot get prompt token count for a model that's not loaded.");
    }
    return this.nativeModule.getPromptTokenCount();
  }
  getTotalTokenCount() {
    return this.getGeneratedTokenCount() + this.getPromptTokenCount();
  }
  async generate(messages, tools) {
    if (!this._isReady) {
      throw new RnExecutorchError(RnExecutorchErrorCode.ModuleNotLoaded, 'The model is currently not loaded. Please load the model before calling generate().');
    }
    if (messages.length === 0) {
      throw new RnExecutorchError(RnExecutorchErrorCode.InvalidUserInput, 'Messages array is empty!');
    }
    if (messages[0] && messages[0].role !== 'system') {
      Logger.warn(`You are not providing system prompt. You can pass it in the first message using { role: 'system', content: YOUR_PROMPT }. Otherwise prompt from your model's chat template will be used.`);
    }
    const renderedChat = this.applyChatTemplate(messages, this.tokenizerConfig, tools,
    // eslint-disable-next-line camelcase
    {
      tools_in_user_message: false,
      add_generation_prompt: true
    });
    return await this.forward(renderedChat);
  }
  async sendMessage(message) {
    const updatedHistory = [...this._messageHistory, {
      content: message,
      role: 'user'
    }];
    this.messageHistoryCallback(updatedHistory);
    const countTokensCallback = messages => {
      const rendered = this.applyChatTemplate(messages, this.tokenizerConfig, this.toolsConfig?.tools,
      // eslint-disable-next-line camelcase
      {
        tools_in_user_message: false,
        add_generation_prompt: true
      });
      return this.nativeModule.countTextTokens(rendered);
    };
    const maxContextLength = this.nativeModule.getMaxContextLength();
    const messageHistoryWithPrompt = this.chatConfig.contextStrategy.buildContext(this.chatConfig.systemPrompt, updatedHistory, maxContextLength, countTokensCallback);
    const response = await this.generate(messageHistoryWithPrompt, this.toolsConfig?.tools);
    if (!this.toolsConfig || this.toolsConfig.displayToolCalls) {
      this.messageHistoryCallback([...this._messageHistory, {
        content: response,
        role: 'assistant'
      }]);
    }
    if (!this.toolsConfig) {
      return response;
    }
    const toolCalls = parseToolCall(response);
    for (const toolCall of toolCalls) {
      this.toolsConfig.executeToolCallback(toolCall).then(toolResponse => {
        if (toolResponse) {
          this.messageHistoryCallback([...this._messageHistory, {
            content: toolResponse,
            role: 'assistant'
          }]);
        }
      });
    }
    return response;
  }
  deleteMessage(index) {
    // we delete referenced message and all messages after it
    // so the model responses that used them are deleted as well
    const newMessageHistory = this._messageHistory.slice(0, index);
    this.messageHistoryCallback(newMessageHistory);
  }
  applyChatTemplate(messages, tokenizerConfig, tools, templateFlags) {
    if (!tokenizerConfig.chat_template) {
      throw new RnExecutorchError(RnExecutorchErrorCode.TokenizerError, "Tokenizer config doesn't include chat_template");
    }
    const template = new Template(tokenizerConfig.chat_template);
    const specialTokens = Object.fromEntries(Object.values(SPECIAL_TOKENS).filter(key => key in tokenizerConfig).map(key => [key, tokenizerConfig[key]]));
    const result = template.render({
      messages,
      tools,
      ...templateFlags,
      ...specialTokens
    });
    return result;
  }
}
//# sourceMappingURL=LLMController.js.map