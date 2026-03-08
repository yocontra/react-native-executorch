"use strict";

import { SemanticSegmentationModule } from '../../modules/computer_vision/SemanticSegmentationModule';
import { useModuleFactory } from '../useModuleFactory';

/**
 * React hook for managing a Semantic Segmentation model instance.
 *
 * @typeParam C - A {@link SemanticSegmentationModelSources} config specifying which built-in model to load.
 * @param props - Configuration object containing `model` config and optional `preventLoad` flag.
 * @returns An object with model state (`error`, `isReady`, `isGenerating`, `downloadProgress`) and a typed `forward` function.
 *
 * @example
 * ```ts
 * const { isReady, forward } = useSemanticSegmentation({
 *   model: { modelName: 'deeplab-v3', modelSource: DEEPLAB_V3_RESNET50 },
 * });
 * ```
 *
 * @category Hooks
 */
export const useSemanticSegmentation = ({
  model,
  preventLoad = false
}) => {
  const {
    error,
    isReady,
    isGenerating,
    downloadProgress,
    runForward
  } = useModuleFactory({
    factory: (config, onProgress) => SemanticSegmentationModule.fromModelName(config, onProgress),
    config: model,
    preventLoad
  });
  const forward = (imageSource, classesOfInterest = [], resizeToInput = true) => runForward(inst => inst.forward(imageSource, classesOfInterest, resizeToInput));
  return {
    error,
    isReady,
    isGenerating,
    downloadProgress,
    forward
  };
};
//# sourceMappingURL=useSemanticSegmentation.js.map