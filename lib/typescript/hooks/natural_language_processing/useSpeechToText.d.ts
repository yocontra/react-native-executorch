import { SpeechToTextType, SpeechToTextProps } from '../../types/stt';
/**
 * React hook for managing a Speech to Text (STT) instance.
 *
 * @category Hooks
 * @param speechToTextProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Speech to Text model.
 */
export declare const useSpeechToText: ({ model, preventLoad, }: SpeechToTextProps) => SpeechToTextType;
