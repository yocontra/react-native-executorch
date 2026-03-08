import { TextToSpeechProps, TextToSpeechType } from '../../types/tts';
/**
 * React hook for managing Text to Speech instance.
 *
 * @category Hooks
 * @param TextToSpeechProps - Configuration object containing `model` source, `voice` and optional `preventLoad`.
 * @returns Ready to use Text to Speech model.
 */
export declare const useTextToSpeech: ({ model, voice, preventLoad, }: TextToSpeechProps) => TextToSpeechType;
