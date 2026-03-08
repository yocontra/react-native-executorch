"use strict";

/**
 * Configuration for a custom semantic segmentation model.
 *
 * @typeParam T - The {@link LabelEnum} type for the model.
 * @property labelMap - The enum-like object mapping class names to indices.
 * @property preprocessorConfig - Optional preprocessing parameters.
 * @property preprocessorConfig.normMean - Per-channel mean values for input normalization.
 * @property preprocessorConfig.normStd - Per-channel standard deviation values for input normalization.
 *
 * @category Types
 */

/**
 * Per-model config for {@link SemanticSegmentationModule.fromModelName}.
 * Each model name maps to its required fields.
 * Add new union members here when a model needs extra sources or options.
 *
 * @category Types
 */

/**
 * Union of all built-in semantic segmentation model names
 * (e.g. `'deeplab-v3-resnet50'`, `'selfie-segmentation'`).
 *
 * @category Types
 */

/**
 * Extracts the model name from a {@link SemanticSegmentationModelSources} config object.
 *
 * @category Types
 */

/**
 * Labels used in the DeepLab semantic segmentation model.
 *
 * @category Types
 */
export let DeeplabLabel = /*#__PURE__*/function (DeeplabLabel) {
  DeeplabLabel[DeeplabLabel["BACKGROUND"] = 0] = "BACKGROUND";
  DeeplabLabel[DeeplabLabel["AEROPLANE"] = 1] = "AEROPLANE";
  DeeplabLabel[DeeplabLabel["BICYCLE"] = 2] = "BICYCLE";
  DeeplabLabel[DeeplabLabel["BIRD"] = 3] = "BIRD";
  DeeplabLabel[DeeplabLabel["BOAT"] = 4] = "BOAT";
  DeeplabLabel[DeeplabLabel["BOTTLE"] = 5] = "BOTTLE";
  DeeplabLabel[DeeplabLabel["BUS"] = 6] = "BUS";
  DeeplabLabel[DeeplabLabel["CAR"] = 7] = "CAR";
  DeeplabLabel[DeeplabLabel["CAT"] = 8] = "CAT";
  DeeplabLabel[DeeplabLabel["CHAIR"] = 9] = "CHAIR";
  DeeplabLabel[DeeplabLabel["COW"] = 10] = "COW";
  DeeplabLabel[DeeplabLabel["DININGTABLE"] = 11] = "DININGTABLE";
  DeeplabLabel[DeeplabLabel["DOG"] = 12] = "DOG";
  DeeplabLabel[DeeplabLabel["HORSE"] = 13] = "HORSE";
  DeeplabLabel[DeeplabLabel["MOTORBIKE"] = 14] = "MOTORBIKE";
  DeeplabLabel[DeeplabLabel["PERSON"] = 15] = "PERSON";
  DeeplabLabel[DeeplabLabel["POTTEDPLANT"] = 16] = "POTTEDPLANT";
  DeeplabLabel[DeeplabLabel["SHEEP"] = 17] = "SHEEP";
  DeeplabLabel[DeeplabLabel["SOFA"] = 18] = "SOFA";
  DeeplabLabel[DeeplabLabel["TRAIN"] = 19] = "TRAIN";
  DeeplabLabel[DeeplabLabel["TVMONITOR"] = 20] = "TVMONITOR";
  return DeeplabLabel;
}({});

/**
 * Labels used in the selfie semantic segmentation model.
 *
 * @category Types
 */
export let SelfieSegmentationLabel = /*#__PURE__*/function (SelfieSegmentationLabel) {
  SelfieSegmentationLabel[SelfieSegmentationLabel["SELFIE"] = 0] = "SELFIE";
  SelfieSegmentationLabel[SelfieSegmentationLabel["BACKGROUND"] = 1] = "BACKGROUND";
  return SelfieSegmentationLabel;
}({});

/**
 * Props for the `useSemanticSegmentation` hook.
 *
 * @typeParam C - A {@link SemanticSegmentationModelSources} config specifying which built-in model to load.
 * @property model - The model config containing `modelName` and `modelSource`.
 * @property {boolean} [preventLoad] - Boolean that can prevent automatic model loading (and downloading the data if you load it for the first time) after running the hook.
 *
 * @category Types
 */

/**
 * Return type for the `useSemanticSegmentation` hook.
 * Manages the state and operations for semantic segmentation models.
 *
 * @typeParam L - The {@link LabelEnum} representing the model's class labels.
 *
 * @category Types
 */
//# sourceMappingURL=semanticSegmentation.js.map