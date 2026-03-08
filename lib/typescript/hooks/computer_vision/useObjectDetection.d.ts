import { ObjectDetectionLabels } from '../../modules/computer_vision/ObjectDetectionModule';
import { ObjectDetectionModelSources, ObjectDetectionProps, ObjectDetectionType } from '../../types/objectDetection';
/**
 * React hook for managing an Object Detection model instance.
 *
 * @typeParam C - A {@link ObjectDetectionModelSources} config specifying which built-in model to load.
 * @category Hooks
 * @param props - Configuration object containing `model` config and optional `preventLoad` flag.
 * @returns An object with model state (`error`, `isReady`, `isGenerating`, `downloadProgress`) and typed `forward` and `runOnFrame` functions.
 */
export declare const useObjectDetection: <C extends ObjectDetectionModelSources>({ model, preventLoad, }: ObjectDetectionProps<C>) => ObjectDetectionType<ObjectDetectionLabels<C["modelName"]>>;
