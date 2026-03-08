import { ResourceSource } from '../../types/common';
/**
 * Module for Tokenizer functionalities.
 *
 * @category Typescript API
 */
export declare class TokenizerModule {
    /**
     * Native module instance
     */
    nativeModule: any;
    /**
     * Loads the tokenizer from the specified source.
     * `tokenizerSource` is a string that points to the location of the tokenizer JSON file.
     *
     * @param tokenizer - Object containing `tokenizerSource`.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(tokenizer: {
        tokenizerSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Converts a string into an array of token IDs.
     *
     * @param input - The input string to be tokenized.
     * @returns An array of token IDs.
     */
    encode(input: string): Promise<number[]>;
    /**
     * Converts an array of token IDs into a string.
     *
     * @param tokens - Array of token IDs to be decoded.
     * @param skipSpecialTokens - Whether to skip special tokens during decoding (default: true).
     * @returns The decoded string.
     */
    decode(tokens: number[], skipSpecialTokens?: boolean): Promise<string>;
    /**
     * Returns the size of the tokenizer's vocabulary.
     *
     * @returns The vocabulary size.
     */
    getVocabSize(): Promise<number>;
    /**
     * Returns the token associated to the ID.
     *
     * @param tokenId - ID of the token.
     * @returns The token string associated to ID.
     */
    idToToken(tokenId: number): Promise<string>;
    /**
     * Returns the ID associated to the token.
     *
     * @param token - The token string.
     * @returns The ID associated to the token.
     */
    tokenToId(token: string): Promise<number>;
}
