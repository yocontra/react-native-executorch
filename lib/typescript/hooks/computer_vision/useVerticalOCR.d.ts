import { OCRType, VerticalOCRProps } from '../../types/ocr';
/**
 * React hook for managing a Vertical OCR instance.
 *
 * @category Hooks
 * @param VerticalOCRProps - Configuration object containing `model` sources, optional `independentCharacters` and `preventLoad` flag.
 * @returns Ready to use Vertical OCR model.
 */
export declare const useVerticalOCR: ({ model, independentCharacters, preventLoad, }: VerticalOCRProps) => OCRType;
