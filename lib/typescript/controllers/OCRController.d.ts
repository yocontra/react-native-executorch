import { ResourceSource } from '../types/common';
import { OCRLanguage } from '../types/ocr';
import { BaseOCRController } from './BaseOCRController';
export declare class OCRController extends BaseOCRController {
    protected loadNativeModule(detectorPath: string, recognizerPath: string, language: OCRLanguage): Promise<any>;
    load: (detectorSource: ResourceSource, recognizerSource: ResourceSource, language: OCRLanguage, onDownloadProgressCallback?: (downloadProgress: number) => void) => Promise<void>;
}
