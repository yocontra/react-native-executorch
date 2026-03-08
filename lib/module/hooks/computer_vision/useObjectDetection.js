"use strict";

import { ObjectDetectionModule } from '../../modules/computer_vision/ObjectDetectionModule';
import { useMemo } from 'react';
import { useModuleFactory } from '../useModuleFactory';

/**
 * React hook for managing an Object Detection model instance.
 *
 * @typeParam C - A {@link ObjectDetectionModelSources} config specifying which built-in model to load.
 * @category Hooks
 * @param props - Configuration object containing `model` config and optional `preventLoad` flag.
 * @returns An object with model state (`error`, `isReady`, `isGenerating`, `downloadProgress`) and typed `forward` and `runOnFrame` functions.
 */
export const useObjectDetection = ({
  model,
  preventLoad = false
}) => {
  const {
    error,
    isReady,
    isGenerating,
    downloadProgress,
    runForward,
    instance
  } = useModuleFactory({
    factory: (config, onProgress) => ObjectDetectionModule.fromModelName(config, onProgress),
    config: model,
    preventLoad
  });
  const forward = (input, detectionThreshold) => runForward(inst => inst.forward(input, detectionThreshold));
  const runOnFrame = useMemo(() => instance?.runOnFrame ?? null, [instance]);
  return {
    error,
    isReady,
    isGenerating,
    downloadProgress,
    forward,
    runOnFrame
  };
};
//# sourceMappingURL=useObjectDetection.js.map