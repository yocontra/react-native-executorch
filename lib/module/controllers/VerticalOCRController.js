"use strict";

import { symbols } from '../constants/ocr/symbols';
import { BaseOCRController } from './BaseOCRController';
export class VerticalOCRController extends BaseOCRController {
  async loadNativeModule(detectorPath, recognizerPath, language, independentCharacters) {
    return await global.loadVerticalOCR(detectorPath, recognizerPath, symbols[language], independentCharacters);
  }
  load = async (detectorSource, recognizerSource, language, independentCharacters, onDownloadProgressCallback) => {
    await this.internalLoad(detectorSource, recognizerSource, language, onDownloadProgressCallback, independentCharacters);
  };
}
//# sourceMappingURL=VerticalOCRController.js.map