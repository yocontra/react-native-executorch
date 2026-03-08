"use strict";

import { useEffect, useState } from 'react';
import { OCRController } from '../../controllers/OCRController';
/**
 * React hook for managing an OCR instance.
 *
 * @category Hooks
 * @param OCRProps - Configuration object containing `model` sources and optional `preventLoad` flag.
 * @returns Ready to use OCR model.
 */
export const useOCR = ({
  model,
  preventLoad = false
}) => {
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [controllerInstance] = useState(() => new OCRController({
    isReadyCallback: setIsReady,
    isGeneratingCallback: setIsGenerating,
    errorCallback: setError
  }));
  useEffect(() => {
    if (preventLoad) return;
    (async () => {
      await controllerInstance.load(model.detectorSource, model.recognizerSource, model.language, setDownloadProgress);
    })();
    return () => {
      controllerInstance.delete();
    };
  }, [controllerInstance, model.detectorSource, model.recognizerSource, model.language, preventLoad]);
  return {
    error,
    isReady,
    isGenerating,
    forward: controllerInstance.forward,
    downloadProgress
  };
};
//# sourceMappingURL=useOCR.js.map