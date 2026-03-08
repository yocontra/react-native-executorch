"use strict";

import { CocoLabel, IMAGENET1K_MEAN, IMAGENET1K_STD } from '../../constants/commonVision';
import { fetchModelPath } from '../BaseLabeledModule';
import { VisionLabeledModule } from './VisionLabeledModule';
const ModelConfigs = {
  'ssdlite-320-mobilenet-v3-large': {
    labelMap: CocoLabel,
    preprocessorConfig: undefined
  },
  'rf-detr-nano': {
    labelMap: CocoLabel,
    preprocessorConfig: {
      normMean: IMAGENET1K_MEAN,
      normStd: IMAGENET1K_STD
    }
  }
};

/**
 * Resolves the {@link LabelEnum} for a given built-in object detection model name.
 *
 * @typeParam M - A built-in model name from {@link ObjectDetectionModelName}.
 *
 * @category Types
 */

/** @internal */

/**
 * Generic object detection module with type-safe label maps.
 *
 * @typeParam T - Either a built-in model name (e.g. `'ssdlite-320-mobilenet-v3-large'`)
 *   or a custom {@link LabelEnum} label map.
 *
 * @category Typescript API
 */
export class ObjectDetectionModule extends VisionLabeledModule {
  constructor(labelMap, nativeModule) {
    super(labelMap, nativeModule);
  }

  /**
   * Creates an object detection instance for a built-in model.
   *
   * @param config - A {@link ObjectDetectionModelSources} object specifying which model to load and where to fetch it from.
   * @param onDownloadProgress - Optional callback to monitor download progress, receiving a value between 0 and 1.
   * @returns A Promise resolving to an `ObjectDetectionModule` instance typed to the chosen model's label map.
   */
  static async fromModelName(config, onDownloadProgress = () => {}) {
    const {
      modelSource
    } = config;
    const {
      labelMap,
      preprocessorConfig
    } = ModelConfigs[config.modelName];
    const normMean = preprocessorConfig?.normMean ?? [];
    const normStd = preprocessorConfig?.normStd ?? [];
    const allLabelNames = [];
    for (const [name, value] of Object.entries(labelMap)) {
      if (typeof value === 'number') allLabelNames[value] = name;
    }
    for (let i = 0; i < allLabelNames.length; i++) {
      if (allLabelNames[i] == null) allLabelNames[i] = '';
    }
    const modelPath = await fetchModelPath(modelSource, onDownloadProgress);
    const nativeModule = await global.loadObjectDetection(modelPath, normMean, normStd, allLabelNames);
    return new ObjectDetectionModule(labelMap, nativeModule);
  }

  /**
   * Creates an object detection instance with a user-provided label map and custom config.
   *
   * @param modelSource - A fetchable resource pointing to the model binary.
   * @param config - A {@link ObjectDetectionConfig} object with the label map.
   * @param onDownloadProgress - Optional callback to monitor download progress, receiving a value between 0 and 1.
   * @returns A Promise resolving to an `ObjectDetectionModule` instance typed to the provided label map.
   */
  /**
   * Executes the model's forward pass to detect objects within the provided image.
   *
   * @param input - A string image source (file path, URI, or Base64) or a {@link PixelData} object.
   * @param detectionThreshold - Minimum confidence score for a detection to be included. Default is 0.7.
   * @returns A Promise resolving to an array of {@link Detection} objects.
   */
  async forward(input, detectionThreshold = 0.7) {
    return super.forward(input, detectionThreshold);
  }
  static async fromCustomConfig(modelSource, config, onDownloadProgress = () => {}) {
    const normMean = config.preprocessorConfig?.normMean ?? [];
    const normStd = config.preprocessorConfig?.normStd ?? [];
    const allLabelNames = [];
    for (const [name, value] of Object.entries(config.labelMap)) {
      if (typeof value === 'number') allLabelNames[value] = name;
    }
    for (let i = 0; i < allLabelNames.length; i++) {
      if (allLabelNames[i] == null) allLabelNames[i] = '';
    }
    const modelPath = await fetchModelPath(modelSource, onDownloadProgress);
    const nativeModule = await global.loadObjectDetection(modelPath, normMean, normStd, allLabelNames);
    return new ObjectDetectionModule(config.labelMap, nativeModule);
  }
}
//# sourceMappingURL=ObjectDetectionModule.js.map