import { ResourceSource } from '../../types/common';
import { Segment } from '../../types/vad';
import { BaseModule } from '../BaseModule';
/**
 * Module for Voice Activity Detection (VAD) functionalities.
 *
 * @category Typescript API
 */
export declare class VADModule extends BaseModule {
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
     * Executes the model's forward pass, where `waveform` is a Float32Array representing the audio signal (16kHz).
     *
     * @param waveform - The input audio waveform as a Float32Array. It must represent a mono audio signal sampled at 16kHz.
     * @returns A promise resolving to an array of detected speech segments.
     */
    forward(waveform: Float32Array): Promise<Segment[]>;
}
