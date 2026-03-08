import { ResourceSource } from '../../types/common';
import { BaseModule } from '../BaseModule';
/**
 * Module for generating text embeddings from input text.
 *
 * @category Typescript API
 */
export declare class TextEmbeddingsModule extends BaseModule {
    /**
     * Loads the model and tokenizer specified by the config object.
     *
     * @param model - Object containing model and tokenizer sources.
     * @param model.modelSource - `ResourceSource` that specifies the location of the text embeddings model binary.
     * @param model.tokenizerSource - `ResourceSource` that specifies the location of the tokenizer JSON file.
     * @param onDownloadProgressCallback - Optional callback to track download progress (value between 0 and 1).
     */
    load(model: {
        modelSource: ResourceSource;
        tokenizerSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Executes the model's forward pass, where `input` is a text that will be embedded.
     *
     * @param input - The text string to embed.
     * @returns A Float32Array containing the vector embeddings.
     */
    forward(input: string): Promise<Float32Array>;
}
