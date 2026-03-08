"use strict";

import { symbols } from '../constants/ocr/symbols';
import { BaseOCRController } from './BaseOCRController';
export class OCRController extends BaseOCRController {
  async loadNativeModule(detectorPath, recognizerPath, language) {
    return await global.loadOCR(detectorPath, recognizerPath, symbols[language]);
  }
  load = async (detectorSource, recognizerSource, language, onDownloadProgressCallback) => {
    await this.internalLoad(detectorSource, recognizerSource, language, onDownloadProgressCallback);
  };
}
//# sourceMappingURL=OCRController.js.map