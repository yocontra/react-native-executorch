import { ResourceSource } from '../../types/common';
import { BaseModule } from '../BaseModule';
/**
 * Module for text-to-image generation tasks.
 *
 * @category Typescript API
 */
export declare class TextToImageModule extends BaseModule {
    private inferenceCallback;
    /**
     * Creates a new instance of `TextToImageModule` with optional callback on inference step.
     *
     * @param inferenceCallback - Optional callback function that receives the current step index during inference.
     */
    constructor(inferenceCallback?: (stepIdx: number) => void);
    /**
     * Loads the model from specified resources.
     *
     * @param model - Object containing sources for tokenizer, scheduler, encoder, unet, and decoder.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(model: {
        tokenizerSource: ResourceSource;
        schedulerSource: ResourceSource;
        encoderSource: ResourceSource;
        unetSource: ResourceSource;
        decoderSource: ResourceSource;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Runs the model to generate an image described by `input`, and conditioned by `seed`, performing `numSteps` inference steps.
     * The resulting image, with dimensions `imageSize`×`imageSize` pixels, is returned as a base64-encoded string.
     *
     * @param input - The text prompt to generate the image from.
     * @param imageSize - The desired width and height of the output image in pixels.
     * @param numSteps - The number of inference steps to perform.
     * @param seed - An optional seed for random number generation to ensure reproducibility.
     * @returns A Base64-encoded string representing the generated PNG image.
     */
    forward(input: string, imageSize?: number, numSteps?: number, seed?: number): Promise<string>;
    /**
     * Interrupts model generation. The model is stopped in the nearest step.
     */
    interrupt(): void;
}
