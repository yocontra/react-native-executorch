import { ResourceSource } from '../../types/common';
import { OCRDetection, OCRLanguage } from '../../types/ocr';
/**
 * Module for Optical Character Recognition (OCR) tasks.
 *
 * @category Typescript API
 */
export declare class OCRModule {
    private controller;
    constructor();
    /**
     * Loads the model, where `detectorSource` is a string that specifies the location of the detector binary,
     * `recognizerSource` is a string that specifies the location of the recognizer binary,
     * and `language` is a parameter that specifies the language of the text to be recognized by the OCR.
     *
     * @param model - Object containing `detectorSource`, `recognizerSource`, and `language`.
     * @param onDownloadProgressCallback - Optional callback to monitor download progress.
     */
    load(model: {
        detectorSource: ResourceSource;
        recognizerSource: ResourceSource;
        language: OCRLanguage;
    }, onDownloadProgressCallback?: (progress: number) => void): Promise<void>;
    /**
     * Executes the model's forward pass, where `imageSource` can be a fetchable resource or a Base64-encoded string.
     *
     * @param imageSource - The image source to be processed.
     * @returns The OCR result as a `OCRDetection[]`.
     */
    forward(imageSource: string): Promise<OCRDetection[]>;
    /**
     * Release the memory held by the module. Calling `forward` afterwards is invalid.
     * Note that you cannot delete model while it's generating.
     */
    delete(): void;
}
