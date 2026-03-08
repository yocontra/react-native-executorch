"use strict";

import { ResourceFetcher } from '../utils/ResourceFetcher';
import { RnExecutorchErrorCode } from '../errors/ErrorCodes';
import { RnExecutorchError } from '../errors/errorUtils';
import { BaseModule } from './BaseModule';

/**
 * Fetches a model binary and returns its local path, throwing if the download
 * was interrupted (paused or cancelled).
 *
 * @internal
 */
export async function fetchModelPath(source, onDownloadProgress) {
  const paths = await ResourceFetcher.fetch(onDownloadProgress, source);
  if (!paths?.[0]) {
    throw new RnExecutorchError(RnExecutorchErrorCode.DownloadInterrupted, 'The download has been interrupted. Please retry.');
  }
  return paths[0];
}

/**
 * Given a model configs record (mapping model names to `{ labelMap }`) and a
 * type `T` (either a model name key or a raw {@link LabelEnum}), resolves to
 * the label map for that model or `T` itself.
 *
 * @internal
 */

/**
 * Base class for vision modules that carry a type-safe label map.
 *
 * @typeParam LabelMap - The resolved {@link LabelEnum} for the model's output classes.
 * @internal
 */
export class BaseLabeledModule extends BaseModule {
  constructor(labelMap, nativeModule) {
    super();
    this.labelMap = labelMap;
    this.nativeModule = nativeModule;
  }

  // TODO: figure it out so we can delete this (we need this because of basemodule inheritance)
  async load() {}
}
//# sourceMappingURL=BaseLabeledModule.js.map