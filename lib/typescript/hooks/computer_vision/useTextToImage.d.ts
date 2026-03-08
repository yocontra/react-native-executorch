import { TextToImageProps, TextToImageType } from '../../types/tti';
/**
 * React hook for managing a Text to Image instance.
 *
 * @category Hooks
 * @param TextToImageProps - Configuration object containing `model` source, `inferenceCallback`, and optional `preventLoad` flag.
 * @returns Ready to use Text to Image model.
 */
export declare const useTextToImage: ({ model, inferenceCallback, preventLoad, }: TextToImageProps) => TextToImageType;
