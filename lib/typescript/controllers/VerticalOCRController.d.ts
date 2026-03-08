import { ResourceSource } from '../types/common';
import { OCRLanguage } from '../types/ocr';
import { BaseOCRController } from './BaseOCRController';
export declare class VerticalOCRController extends BaseOCRController {
    protected loadNativeModule(detectorPath: string, recognizerPath: string, language: OCRLanguage, independentCharacters?: boolean): Promise<any>;
    load: (detectorSource: ResourceSource, recognizerSource: ResourceSource, language: OCRLanguage, independentCharacters: boolean, onDownloadProgressCallback: (downloadProgress: number) => void) => Promise<void>;
}
