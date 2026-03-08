import { ChatConfig, Message } from '../types/llm';
/**
 * Default system prompt used to guide the behavior of Large Language Models (LLMs).
 *
 * @category Utilities - LLM
 */
export declare const DEFAULT_SYSTEM_PROMPT = "You are a knowledgeable, efficient, and direct AI assistant. Provide concise answers, focusing on the key information needed. Offer suggestions tactfully when appropriate to improve outcomes. Engage in productive collaboration with the user. Don't return too much text.";
/**
 * Generates a default structured output prompt based on the provided JSON schema.
 *
 * @category Utilities - LLM
 * @param structuredOutputSchema - A string representing the JSON schema for the desired output format.
 * @returns A prompt string instructing the model to format its output according to the given schema.
 */
export declare const DEFAULT_STRUCTURED_OUTPUT_PROMPT: (structuredOutputSchema: string) => string;
/**
 * Default message history for Large Language Models (LLMs).
 *
 * @category Utilities - LLM
 */
export declare const DEFAULT_MESSAGE_HISTORY: Message[];
/**
 * Default context buffer tokens (number of tokens to keep for the model response) for Large Language Models (LLMs).
 *
 * @category Utilities - LLM
 */
export declare const DEFAULT_CONTEXT_BUFFER_TOKENS = 512;
/**
 * Default chat configuration for Large Language Models (LLMs).
 *
 * @category Utilities - LLM
 */
export declare const DEFAULT_CHAT_CONFIG: ChatConfig;
