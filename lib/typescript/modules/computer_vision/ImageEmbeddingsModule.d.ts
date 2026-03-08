import { ResourceSource } from '../../types/common';
import { BaseModule } from '../BaseModule';
/**
 * Module for generating image embeddings from input images.
 *
 * @category Typescript API
 */
export declare class ImageEmbeddingsModule extends BaseModule {
    /**
     * Loads the model, where `modelSource` is a string that specifies the location of the model binary.
     *
     * @param model - Object containing `modelSource`.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(model: {
        modelSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Executes the model's forward pass. Returns an embedding array for a given sentence.
     *
     * @param imageSource - The image source (URI/URL) to image that will be embedded.
     * @returns A Float32Array containing the image embeddings.
     */
    forward(imageSource: string): Promise<Float32Array>;
}
