import { OCRProps, OCRType } from '../../types/ocr';
/**
 * React hook for managing an OCR instance.
 *
 * @category Hooks
 * @param OCRProps - Configuration object containing `model` sources and optional `preventLoad` flag.
 * @returns Ready to use OCR model.
 */
export declare const useOCR: ({ model, preventLoad }: OCRProps) => OCRType;
