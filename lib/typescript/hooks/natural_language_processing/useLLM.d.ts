import { LLMProps, LLMType } from '../../types/llm';
/**
 * React hook for managing a Large Language Model (LLM) instance.
 *
 * @category Hooks
 * @param model - Object containing model, tokenizer, and tokenizer config sources.
 * @returns An object implementing the `LLMType` interface for interacting with the LLM.
 */
export declare const useLLM: ({ model, preventLoad }: LLMProps) => LLMType;
