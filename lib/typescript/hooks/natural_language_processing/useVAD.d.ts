import { VADType, VADProps } from '../../types/vad';
/**
 * React hook for managing a VAD model instance.
 *
 * @category Hooks
 * @param VADProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use VAD model.
 */
export declare const useVAD: ({ model, preventLoad }: VADProps) => VADType;
