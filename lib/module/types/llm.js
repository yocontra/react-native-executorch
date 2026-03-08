"use strict";

/**
 * Properties for initializing and configuring a Large Language Model (LLM) instance.
 *
 * @category Types
 */

/**
 * React hook for managing a Large Language Model (LLM) instance.
 *
 * @category Types
 */

/**
 * Configuration object for initializing and customizing a Large Language Model (LLM) instance.
 *
 * @category Types
 */

/**
 * Roles that a message sender can have.
 *
 * @category Types
 */

/**
 * Represents a message in the conversation.
 *
 * @category Types
 * @property {MessageRole} role - Role of the message sender of type `MessageRole`.
 * @property {string} content - Content of the message.
 */

/**
 * Represents a tool call made by the model.
 *
 * @category Types
 * @property {string} toolName - The name of the tool being called.
 * @property {Object} arguments - The arguments passed to the tool.
 */

/**
 * Represents a tool that can be used by the model.
 * Usually tool is represented with dictionary (Object), but fields depend on the model.
 * Unfortunately there's no one standard so it's hard to type it better.
 *
 * @category Types
 */

/**
 * Object configuring chat management.
 *
 * @category Types
 * @property {Message[]} initialMessageHistory - An array of `Message` objects that represent the conversation history. This can be used to provide initial context to the model.
 * @property {string} systemPrompt - Often used to tell the model what is its purpose, for example - "Be a helpful translator".
 * @property {ContextStrategy} contextStrategy - Defines a strategy for managing the conversation context window and message history.
 */

/**
 * Object configuring options for enabling and managing tool use. **It will only have effect if your model's chat template support it**.
 *
 * @category Types
 * @property {LLMTool[]} tools - List of objects defining tools.
 * @property {(call: ToolCall) => Promise<string | null>} executeToolCallback - Function that accepts `ToolCall`, executes tool and returns the string to model.
 * @property {boolean} [displayToolCalls] - If set to true, JSON tool calls will be displayed in chat. If false, only answers will be displayed.
 */

/**
 * Object configuring generation settings.
 *
 * @category Types
 * @property {number} [temperature] - Scales output logits by the inverse of temperature. Controls the randomness / creativity of text generation.
 * @property {number} [topp] - Only samples from the smallest set of tokens whose cumulative probability exceeds topp.
 * @property {number} [outputTokenBatchSize] - Soft upper limit on the number of tokens in each token batch (in certain cases there can be more tokens in given batch, i.e. when the batch would end with special emoji join character).
 * @property {number} [batchTimeInterval] - Upper limit on the time interval between consecutive token batches.
 */

/**
 * Defines a strategy for managing the conversation context window and message history.
 *
 * @category Types
 */

/**
 * Special tokens used in Large Language Models (LLMs).
 *
 * @category Types
 */
export const SPECIAL_TOKENS = {
  BOS_TOKEN: 'bos_token',
  EOS_TOKEN: 'eos_token',
  UNK_TOKEN: 'unk_token',
  SEP_TOKEN: 'sep_token',
  PAD_TOKEN: 'pad_token',
  CLS_TOKEN: 'cls_token',
  MASK_TOKEN: 'mask_token'
};
//# sourceMappingURL=llm.js.map