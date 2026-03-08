import { SegmentationLabels } from '../../modules/computer_vision/SemanticSegmentationModule';
import { SemanticSegmentationProps, SemanticSegmentationType, ModelNameOf, SemanticSegmentationModelSources } from '../../types/semanticSegmentation';
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
export declare const useSemanticSegmentation: <C extends SemanticSegmentationModelSources>({ model, preventLoad, }: SemanticSegmentationProps<C>) => SemanticSegmentationType<SegmentationLabels<ModelNameOf<C>>>;
