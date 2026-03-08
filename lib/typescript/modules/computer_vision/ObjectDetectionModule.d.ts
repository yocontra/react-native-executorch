import { LabelEnum, PixelData, ResourceSource } from '../../types/common';
import { Detection, ObjectDetectionConfig, ObjectDetectionModelName, ObjectDetectionModelSources } from '../../types/objectDetection';
import { CocoLabel } from '../../constants/commonVision';
import { ResolveLabels as ResolveLabelsFor } from '../BaseLabeledModule';
import { VisionLabeledModule } from './VisionLabeledModule';
declare const ModelConfigs: {
    readonly 'ssdlite-320-mobilenet-v3-large': {
        readonly labelMap: typeof CocoLabel;
        readonly preprocessorConfig: undefined;
    };
    readonly 'rf-detr-nano': {
        readonly labelMap: typeof CocoLabel;
        readonly preprocessorConfig: {
            readonly normMean: import("../../types/common").Triple<number>;
            readonly normStd: import("../../types/common").Triple<number>;
        };
    };
};
type ModelConfigsType = typeof ModelConfigs;
/**
 * Resolves the {@link LabelEnum} for a given built-in object detection model name.
 *
 * @typeParam M - A built-in model name from {@link ObjectDetectionModelName}.
 *
 * @category Types
 */
export type ObjectDetectionLabels<M extends ObjectDetectionModelName> = ResolveLabelsFor<M, ModelConfigsType>;
type ModelNameOf<C extends ObjectDetectionModelSources> = C['modelName'];
/** @internal */
type ResolveLabels<T extends ObjectDetectionModelName | LabelEnum> = ResolveLabelsFor<T, ModelConfigsType>;
/**
 * Generic object detection module with type-safe label maps.
 *
 * @typeParam T - Either a built-in model name (e.g. `'ssdlite-320-mobilenet-v3-large'`)
 *   or a custom {@link LabelEnum} label map.
 *
 * @category Typescript API
 */
export declare class ObjectDetectionModule<T extends ObjectDetectionModelName | LabelEnum> extends VisionLabeledModule<Detection<ResolveLabels<T>>[], ResolveLabels<T>> {
    private constructor();
    /**
     * Creates an object detection instance for a built-in model.
     *
     * @param config - A {@link ObjectDetectionModelSources} object specifying which model to load and where to fetch it from.
     * @param onDownloadProgress - Optional callback to monitor download progress, receiving a value between 0 and 1.
     * @returns A Promise resolving to an `ObjectDetectionModule` instance typed to the chosen model's label map.
     */
    static fromModelName<C extends ObjectDetectionModelSources>(config: C, onDownloadProgress?: (progress: number) => void): Promise<ObjectDetectionModule<ModelNameOf<C>>>;
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
    forward(input: string | PixelData, detectionThreshold?: number): Promise<Detection<ResolveLabels<T>>[]>;
    static fromCustomConfig<L extends LabelEnum>(modelSource: ResourceSource, config: ObjectDetectionConfig<L>, onDownloadProgress?: (progress: number) => void): Promise<ObjectDetectionModule<L>>;
}
export {};
