import { RnExecutorchError } from '../errors/errorUtils';
import { ResourceSource } from '../types/common';
import { OCRLanguage, OCRDetection } from '../types/ocr';
export declare abstract class BaseOCRController {
    protected nativeModule: any;
    isReady: boolean;
    isGenerating: boolean;
    error: RnExecutorchError | null;
    protected isReadyCallback: (isReady: boolean) => void;
    protected isGeneratingCallback: (isGenerating: boolean) => void;
    protected errorCallback: (error: RnExecutorchError) => void;
    constructor({ isReadyCallback, isGeneratingCallback, errorCallback, }?: {
        isReadyCallback?: ((_isReady: boolean) => void) | undefined;
        isGeneratingCallback?: ((_isGenerating: boolean) => void) | undefined;
        errorCallback?: ((_error: RnExecutorchError) => void) | undefined;
    });
    protected abstract loadNativeModule(detectorPath: string, recognizerPath: string, language: OCRLanguage, extraParams?: any): Promise<any>;
    protected internalLoad: (detectorSource: ResourceSource, recognizerSource: ResourceSource, language: OCRLanguage, onDownloadProgressCallback?: (downloadProgress: number) => void, extraParams?: any) => Promise<void>;
    forward: (imageSource: string) => Promise<OCRDetection[]>;
    delete(): void;
}
