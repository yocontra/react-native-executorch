"use strict";

import { CocoLabel } from '../constants/commonVision';
export { CocoLabel };

/**
 * Represents a bounding box for a detected object in an image.
 *
 * @category Types
 * @property {number} x1 - The x-coordinate of the bottom-left corner of the bounding box.
 * @property {number} y1 - The y-coordinate of the bottom-left corner of the bounding box.
 * @property {number} x2 - The x-coordinate of the top-right corner of the bounding box.
 * @property {number} y2 - The y-coordinate of the top-right corner of the bounding box.
 */

/**
 * Represents a detected object within an image, including its bounding box, label, and confidence score.
 *
 * @category Types
 * @typeParam L - The label enum type for the detected object. Defaults to {@link CocoLabel}.
 * @property {Bbox} bbox - The bounding box of the detected object, defined by its top-left (x1, y1) and bottom-right (x2, y2) coordinates.
 * @property {keyof L} label - The class label of the detected object.
 * @property {number} score - The confidence score of the detection, typically ranging from 0 to 1.
 */

/**
 * Per-model config for {@link ObjectDetectionModule.fromModelName}.
 * Each model name maps to its required fields.
 *
 * @category Types
 */

/**
 * Union of all built-in object detection model names.
 *
 * @category Types
 */

/**
 * Configuration for a custom object detection model.
 *
 * @category Types
 */

/**
 * Props for the `useObjectDetection` hook.
 *
 * @typeParam C - A {@link ObjectDetectionModelSources} config specifying which built-in model to load.
 * @category Types
 * @property model - The model config containing `modelName` and `modelSource`.
 * @property {boolean} [preventLoad] - Boolean that can prevent automatic model loading (and downloading the data if you load it for the first time) after running the hook.
 */

/**
 * Return type for the `useObjectDetection` hook.
 * Manages the state and operations for Computer Vision object detection tasks.
 *
 * @typeParam L - The {@link LabelEnum} representing the model's class labels.
 *
 * @category Types
 */
//# sourceMappingURL=objectDetection.js.map