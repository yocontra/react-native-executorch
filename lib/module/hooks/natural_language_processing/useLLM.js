"use strict";

import { useCallback, useEffect, useState } from 'react';
import { LLMController } from '../../controllers/LLMController';
import { parseUnknownError } from '../../errors/errorUtils';

/**
 * React hook for managing a Large Language Model (LLM) instance.
 *
 * @category Hooks
 * @param model - Object containing model, tokenizer, and tokenizer config sources.
 * @returns An object implementing the `LLMType` interface for interacting with the LLM.
 */
export const useLLM = ({
  model,
  preventLoad = false
}) => {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [error, setError] = useState(null);
  const tokenCallback = useCallback(newToken => {
    setToken(newToken);
    setResponse(prevResponse => prevResponse + newToken);
  }, []);
  const [controllerInstance] = useState(() => new LLMController({
    tokenCallback: tokenCallback,
    messageHistoryCallback: setMessageHistory,
    isReadyCallback: setIsReady,
    isGeneratingCallback: setIsGenerating
  }));
  useEffect(() => {
    setDownloadProgress(0);
    setError(null);
    if (preventLoad) return;
    (async () => {
      try {
        await controllerInstance.load({
          modelSource: model.modelSource,
          tokenizerSource: model.tokenizerSource,
          tokenizerConfigSource: model.tokenizerConfigSource,
          onDownloadProgressCallback: setDownloadProgress
        });
      } catch (e) {
        setError(parseUnknownError(e));
      }
    })();
    return () => {
      if (controllerInstance.isReady) {
        controllerInstance.delete();
      }
    };
  }, [controllerInstance, model.modelSource, model.tokenizerSource, model.tokenizerConfigSource, preventLoad]);

  // memoization of returned functions
  const configure = useCallback(({
    chatConfig,
    toolsConfig,
    generationConfig
  }) => controllerInstance.configure({
    chatConfig,
    toolsConfig,
    generationConfig
  }), [controllerInstance]);
  const generate = useCallback((messages, tools) => {
    setResponse('');
    return controllerInstance.generate(messages, tools);
  }, [controllerInstance]);
  const sendMessage = useCallback(message => {
    setResponse('');
    return controllerInstance.sendMessage(message);
  }, [controllerInstance]);
  const deleteMessage = useCallback(index => controllerInstance.deleteMessage(index), [controllerInstance]);
  const interrupt = useCallback(() => controllerInstance.interrupt(), [controllerInstance]);
  const getGeneratedTokenCount = useCallback(() => controllerInstance.getGeneratedTokenCount(), [controllerInstance]);
  const getPromptTokenCount = useCallback(() => controllerInstance.getPromptTokenCount(), [controllerInstance]);
  const getTotalTokenCount = useCallback(() => controllerInstance.getTotalTokenCount(), [controllerInstance]);
  return {
    messageHistory,
    response,
    token,
    isReady,
    isGenerating,
    downloadProgress,
    error,
    getGeneratedTokenCount: getGeneratedTokenCount,
    getPromptTokenCount: getPromptTokenCount,
    getTotalTokenCount: getTotalTokenCount,
    configure: configure,
    generate: generate,
    sendMessage: sendMessage,
    deleteMessage: deleteMessage,
    interrupt: interrupt
  };
};
//# sourceMappingURL=useLLM.js.map