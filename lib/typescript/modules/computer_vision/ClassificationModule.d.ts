import { ResourceSource } from '../../types/common';
import { BaseModule } from '../BaseModule';
/**
 * Module for image classification tasks.
 *
 * @category Typescript API
 */
export declare class ClassificationModule extends BaseModule {
    /**
     * Loads the model, where `modelSource` is a string that specifies the location of the model binary.
     * To track the download progress, supply a callback function `onDownloadProgressCallback`.
     *
     * @param model - Object containing `modelSource`.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(model: {
        modelSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Executes the model's forward pass, where `imageSource` can be a fetchable resource or a Base64-encoded string.
     *
     * @param imageSource - The image source to be classified.
     * @returns The classification result.
     */
    forward(imageSource: string): Promise<{
        [category: string]: number;
    }>;
}
