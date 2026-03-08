import { LabelEnum } from '../../types/common';
import { VisionModule } from './VisionModule';
/**
 * Base class for computer vision modules that carry a type-safe label map
 * and support the full VisionModule API (string/PixelData forward + runOnFrame).
 *
 * @typeParam TOutput - The model's output type.
 * @typeParam LabelMap - The resolved {@link LabelEnum} for the model's output classes.
 * @internal
 */
export declare abstract class VisionLabeledModule<TOutput, LabelMap extends LabelEnum> extends VisionModule<TOutput> {
    protected readonly labelMap: LabelMap;
    protected constructor(labelMap: LabelMap, nativeModule: unknown);
    load(): Promise<void>;
}
