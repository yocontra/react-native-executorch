import { ResourceSource, LabelEnum } from '../../types/common';
import { DeeplabLabel, ModelNameOf, SemanticSegmentationModelSources, SemanticSegmentationConfig, SemanticSegmentationModelName, SelfieSegmentationLabel } from '../../types/semanticSegmentation';
import { BaseLabeledModule, ResolveLabels as ResolveLabelsFor } from '../BaseLabeledModule';
declare const ModelConfigs: {
    readonly 'deeplab-v3-resnet50': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'deeplab-v3-resnet101': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'deeplab-v3-mobilenet-v3-large': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'lraspp-mobilenet-v3-large': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'fcn-resnet50': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'fcn-resnet101': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'deeplab-v3-resnet50-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'deeplab-v3-resnet101-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'deeplab-v3-mobilenet-v3-large-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'lraspp-mobilenet-v3-large-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'fcn-resnet50-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'fcn-resnet101-quantized': {
        labelMap: typeof DeeplabLabel;
        preprocessorConfig: {
            normMean: import("../../types/common").Triple<number>;
            normStd: import("../../types/common").Triple<number>;
        };
    };
    readonly 'selfie-segmentation': {
        readonly labelMap: typeof SelfieSegmentationLabel;
        readonly preprocessorConfig: undefined;
    };
};
/** @internal */
type ModelConfigsType = typeof ModelConfigs;
/**
 * Resolves the {@link LabelEnum} for a given built-in model name.
 *
 * @typeParam M - A built-in model name from {@link SemanticSegmentationModelName}.
 *
 * @category Types
 */
export type SegmentationLabels<M extends SemanticSegmentationModelName> = ModelConfigsType[M]['labelMap'];
/** @internal */
type ResolveLabels<T extends SemanticSegmentationModelName | LabelEnum> = ResolveLabelsFor<T, ModelConfigsType>;
/**
 * Generic semantic segmentation module with type-safe label maps.
 * Use a model name (e.g. `'deeplab-v3-resnet50'`) as the generic parameter for built-in models,
 * or a custom label enum for custom configs.
 *
 * @typeParam T - Either a built-in model name (`'deeplab-v3-resnet50'`,
 *   `'deeplab-v3-resnet50-quantized'`, `'deeplab-v3-resnet101'`,
 *   `'deeplab-v3-resnet101-quantized'`, `'deeplab-v3-mobilenet-v3-large'`,
 *   `'deeplab-v3-mobilenet-v3-large-quantized'`, `'lraspp-mobilenet-v3-large'`,
 *   `'lraspp-mobilenet-v3-large-quantized'`, `'fcn-resnet50'`,
 *   `'fcn-resnet50-quantized'`, `'fcn-resnet101'`, `'fcn-resnet101-quantized'`,
 *   `'selfie-segmentation'`) or a custom {@link LabelEnum} label map.
 *
 * @category Typescript API
 */
export declare class SemanticSegmentationModule<T extends SemanticSegmentationModelName | LabelEnum> extends BaseLabeledModule<ResolveLabels<T>> {
    private constructor();
    /**
     * Creates a segmentation instance for a built-in model.
     * The config object is discriminated by `modelName` — each model can require different fields.
     *
     * @param config - A {@link SemanticSegmentationModelSources} object specifying which model to load and where to fetch it from.
     * @param onDownloadProgress - Optional callback to monitor download progress, receiving a value between 0 and 1.
     * @returns A Promise resolving to a `SemanticSegmentationModule` instance typed to the chosen model's label map.
     *
     * @example
     * ```ts
     * const segmentation = await SemanticSegmentationModule.fromModelName({
     *   modelName: 'deeplab-v3',
     *   modelSource: 'https://example.com/deeplab.pte',
     * });
     * ```
     */
    static fromModelName<C extends SemanticSegmentationModelSources>(config: C, onDownloadProgress?: (progress: number) => void): Promise<SemanticSegmentationModule<ModelNameOf<C>>>;
    /**
     * Creates a segmentation instance with a user-provided label map and custom config.
     * Use this when working with a custom-exported segmentation model that is not one of the built-in models.
     *
     * @param modelSource - A fetchable resource pointing to the model binary.
     * @param config - A {@link SemanticSegmentationConfig} object with the label map and optional preprocessing parameters.
     * @param onDownloadProgress - Optional callback to monitor download progress, receiving a value between 0 and 1.
     * @returns A Promise resolving to a `SemanticSegmentationModule` instance typed to the provided label map.
     *
     * @example
     * ```ts
     * const MyLabels = { BACKGROUND: 0, FOREGROUND: 1 } as const;
     * const segmentation = await SemanticSegmentationModule.fromCustomConfig(
     *   'https://example.com/custom_model.pte',
     *   { labelMap: MyLabels },
     * );
     * ```
     */
    static fromCustomConfig<L extends LabelEnum>(modelSource: ResourceSource, config: SemanticSegmentationConfig<L>, onDownloadProgress?: (progress: number) => void): Promise<SemanticSegmentationModule<L>>;
    /**
     * Executes the model's forward pass to perform semantic segmentation on the provided image.
     *
     * @param imageSource - A string representing the image source (e.g., a file path, URI, or Base64-encoded string).
     * @param classesOfInterest - An optional list of label keys indicating which per-class probability masks to include in the output. `ARGMAX` is always returned regardless.
     * @param resizeToInput - Whether to resize the output masks to the original input image dimensions. If `false`, returns the raw model output dimensions. Defaults to `true`.
     * @returns A Promise resolving to an object with an `'ARGMAX'` key mapped to an `Int32Array` of per-pixel class indices, and each requested class label mapped to a `Float32Array` of per-pixel probabilities.
     * @throws {RnExecutorchError} If the model is not loaded.
     */
    forward<K extends keyof ResolveLabels<T>>(imageSource: string, classesOfInterest?: K[], resizeToInput?: boolean): Promise<Record<'ARGMAX', Int32Array> & Record<K, Float32Array>>;
}
export {};
