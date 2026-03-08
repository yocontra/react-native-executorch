import { ResourceSource } from '../../types/common';
import { LLMConfig, LLMTool, Message } from '../../types/llm';
/**
 * Module for managing a Large Language Model (LLM) instance.
 *
 * @category Typescript API
 */
export declare class LLMModule {
    private controller;
    private pendingConfig?;
    /**
     * Creates a new instance of `LLMModule` with optional callbacks.
     * @param optionalCallbacks - Object containing optional callbacks.
     *
     * @returns A new LLMModule instance.
     */
    constructor({ tokenCallback, messageHistoryCallback, }?: {
        /**
         * An optional function that will be called on every generated token (`string`) with that token as its only argument.
         */
        tokenCallback?: (token: string) => void;
        /**
         * An optional function called on every finished message (`Message[]`).
         * Returns the entire message history.
         */
        messageHistoryCallback?: (messageHistory: Message[]) => void;
    });
    /**
     * Loads the LLM model and tokenizer.
     *
     * @param model - Object containing model, tokenizer, and tokenizer config sources.
     * @param model.modelSource - `ResourceSource` that specifies the location of the model binary.
     * @param model.tokenizerSource - `ResourceSource` pointing to the JSON file which contains the tokenizer.
     * @param model.tokenizerConfigSource - `ResourceSource` pointing to the JSON file which contains the tokenizer config.
     * @param onDownloadProgressCallback - Optional callback to track download progress (value between 0 and 1).
     */
    load(model: {
        modelSource: ResourceSource;
        tokenizerSource: ResourceSource;
        tokenizerConfigSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Sets new token callback invoked on every token batch.
     *
     * @param tokenCallback - Callback function to handle new tokens.
     */
    setTokenCallback({ tokenCallback, }: {
        tokenCallback: (token: string) => void;
    }): void;
    /**
     * Configures chat and tool calling and generation settings.
     * See [Configuring the model](https://docs.swmansion.com/react-native-executorch/docs/hooks/natural-language-processing/useLLM#configuring-the-model) for details.
     *
     * @param config - Configuration object containing `chatConfig`, `toolsConfig`, and `generationConfig`.
     */
    configure(config: LLMConfig): void;
    /**
     * Runs model inference with raw input string.
     * You need to provide entire conversation and prompt (in correct format and with special tokens!) in input string to this method.
     * It doesn't manage conversation context. It is intended for users that need access to the model itself without any wrapper.
     * If you want a simple chat with model the consider using `sendMessage`
     *
     * @param input - Raw input string containing the prompt and conversation history.
     * @returns The generated response as a string.
     */
    forward(input: string): Promise<string>;
    /**
     * Runs model to complete chat passed in `messages` argument. It doesn't manage conversation context.
     *
     * @param messages - Array of messages representing the chat history.
     * @param tools - Optional array of tools that can be used during generation.
     * @returns The generated response as a string.
     */
    generate(messages: Message[], tools?: LLMTool[]): Promise<string>;
    /**
     * Method to add user message to conversation.
     * After model responds it will call `messageHistoryCallback()` containing both user message and model response.
     * It also returns them.
     *
     * @param message - The message string to send.
     * @returns - Updated message history including the new user message and model response.
     */
    sendMessage(message: string): Promise<Message[]>;
    /**
     * Deletes all messages starting with message on `index` position.
     * After deletion it will call `messageHistoryCallback()` containing new history.
     * It also returns it.
     *
     * @param index - The index of the message to delete from history.
     * @returns - Updated message history after deletion.
     */
    deleteMessage(index: number): Message[];
    /**
     * Interrupts model generation. It may return one more token after interrupt.
     */
    interrupt(): void;
    /**
     * Returns the number of tokens generated in the last response.
     *
     * @returns The count of generated tokens.
     */
    getGeneratedTokenCount(): number;
    /**
     * Returns the number of prompt tokens in the last message.
     *
     * @returns The count of prompt token.
     */
    getPromptTokensCount(): number;
    /**
     * Returns the number of total tokens from the previous generation. This is a sum of prompt tokens and generated tokens.
     *
     * @returns The count of prompt and generated tokens.
     */
    getTotalTokensCount(): number;
    /**
     * Method to delete the model from memory.
     * Note you cannot delete model while it's generating.
     * You need to interrupt it first and make sure model stopped generation.
     */
    delete(): void;
}
