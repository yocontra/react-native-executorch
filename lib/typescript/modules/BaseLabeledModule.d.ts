import { LabelEnum, ResourceSource } from '../types/common';
import { BaseModule } from './BaseModule';
/**
 * Fetches a model binary and returns its local path, throwing if the download
 * was interrupted (paused or cancelled).
 *
 * @internal
 */
export declare function fetchModelPath(source: ResourceSource, onDownloadProgress: (progress: number) => void): Promise<string>;
/**
 * Given a model configs record (mapping model names to `{ labelMap }`) and a
 * type `T` (either a model name key or a raw {@link LabelEnum}), resolves to
 * the label map for that model or `T` itself.
 *
 * @internal
 */
export type ResolveLabels<T, Configs extends Record<string, {
    labelMap: LabelEnum;
}>> = T extends keyof Configs ? Configs[T]['labelMap'] : T extends LabelEnum ? T : never;
/**
 * Base class for vision modules that carry a type-safe label map.
 *
 * @typeParam LabelMap - The resolved {@link LabelEnum} for the model's output classes.
 * @internal
 */
export declare abstract class BaseLabeledModule<LabelMap extends LabelEnum> extends BaseModule {
    protected readonly labelMap: LabelMap;
    protected constructor(labelMap: LabelMap, nativeModule: unknown);
    load(): Promise<void>;
}
