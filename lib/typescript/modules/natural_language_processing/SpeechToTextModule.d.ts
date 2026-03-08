import { DecodingOptions, SpeechToTextModelConfig, TranscriptionResult } from '../../types/stt';
/**
 * Module for Speech to Text (STT) functionalities.
 *
 * @category Typescript API
 */
export declare class SpeechToTextModule {
    private nativeModule;
    private modelConfig;
    /**
     * Loads the model specified by the config object.
     * `onDownloadProgressCallback` allows you to monitor the current progress of the model download.
     *
     * @param model - Configuration object containing model sources.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(model: SpeechToTextModelConfig, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Unloads the model from memory.
     */
    delete(): void;
    /**
     * Runs the encoding part of the model on the provided waveform.
     * Returns the encoded waveform as a Float32Array.
     *
     * @param waveform - The input audio waveform.
     * @returns The encoded output.
     */
    encode(waveform: Float32Array): Promise<Float32Array>;
    /**
     * Runs the decoder of the model.
     *
     * @param tokens - The input tokens.
     * @param encoderOutput - The encoder output.
     * @returns Decoded output.
     */
    decode(tokens: Int32Array, encoderOutput: Float32Array): Promise<Float32Array>;
    /**
     * Starts a transcription process for a given input array (16kHz waveform).
     * For multilingual models, specify the language in `options`.
     * Returns the transcription as a string. Passing `number[]` is deprecated.
     *
     * @param waveform - The Float32Array audio data.
     * @param options - Decoding options including language.
     * @returns The transcription string.
     */
    transcribe(waveform: Float32Array, options?: DecodingOptions): Promise<TranscriptionResult>;
    /**
     * Starts a streaming transcription session.
     * Yields objects with `committed` and `nonCommitted` transcriptions.
     * Committed transcription contains the part of the transcription that is finalized and will not change.
     * Useful for displaying stable results during streaming.
     * Non-committed transcription contains the part of the transcription that is still being processed and may change.
     * Useful for displaying live, partial results during streaming.
     * Use with `streamInsert` and `streamStop` to control the stream.
     *
     * @param options - Decoding options including language.
     * @returns An async generator yielding transcription updates.
     */
    stream(options?: DecodingOptions): AsyncGenerator<{
        committed: TranscriptionResult;
        nonCommitted: TranscriptionResult;
    }>;
    /**
     * Inserts a new audio chunk into the streaming transcription session.
     *
     * @param waveform - The audio chunk to insert.
     */
    streamInsert(waveform: Float32Array): void;
    /**
     * Stops the current streaming transcription session.
     */
    streamStop(): void;
    private validateOptions;
}
