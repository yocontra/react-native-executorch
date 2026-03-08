import { TextToSpeechConfig, TextToSpeechStreamingInput } from '../../types/tts';
/**
 * Module for Text to Speech (TTS) functionalities.
 *
 * @category Typescript API
 */
export declare class TextToSpeechModule {
    /**
     * Native module instance
     */
    nativeModule: any;
    /**
     * Loads the model and voice assets specified by the config object.
     * `onDownloadProgressCallback` allows you to monitor the current progress.
     *
     * @param config - Configuration object containing `model` source and `voice`.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(config: TextToSpeechConfig, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    private loadKokoro;
    /**
     * Synthesizes the provided text into speech.
     * Returns a promise that resolves to the full audio waveform as a `Float32Array`.
     *
     * @param text The input text to be synthesized.
     * @param speed Optional speed multiplier for the speech synthesis (default is 1.0).
     * @returns A promise resolving to the synthesized audio waveform.
     */
    forward(text: string, speed?: number): Promise<Float32Array>;
    /**
     * Starts a streaming synthesis session. Yields audio chunks as they are generated.
     *
     * @param input - Input object containing text and optional speed.
     * @returns An async generator yielding Float32Array audio chunks.
     */
    stream({ text, speed, }: TextToSpeechStreamingInput): AsyncGenerator<Float32Array>;
    /**
     * Stops the streaming process if there is any ongoing.
     */
    streamStop(): void;
    /**
     * Unloads the model from memory.
     */
    delete(): void;
}
