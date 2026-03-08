import { TensorPtr } from '../../types/common';
import { BaseModule } from '../BaseModule';
import { ResourceSource } from '../../types/common';
/**
 * General module for executing custom Executorch models.
 *
 * @category Typescript API
 */
export declare class ExecutorchModule extends BaseModule {
    /**
     * Loads the model, where `modelSource` is a string, number, or object that specifies the location of the model binary.
     * Optionally accepts a download progress callback.
     *
     * @param modelSource - Source of the model to be loaded.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(modelSource: ResourceSource, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Executes the model's forward pass, where input is an array of `TensorPtr` objects.
     * If the inference is successful, an array of tensor pointers is returned.
     *
     * @param inputTensor - Array of input tensor pointers.
     * @returns An array of output tensor pointers.
     */
    forward(inputTensor: TensorPtr[]): Promise<TensorPtr[]>;
}
