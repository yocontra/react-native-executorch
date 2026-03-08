"use strict";

import { VisionModule } from './VisionModule';

/**
 * Base class for computer vision modules that carry a type-safe label map
 * and support the full VisionModule API (string/PixelData forward + runOnFrame).
 *
 * @typeParam TOutput - The model's output type.
 * @typeParam LabelMap - The resolved {@link LabelEnum} for the model's output classes.
 * @internal
 */
export class VisionLabeledModule extends VisionModule {
  constructor(labelMap, nativeModule) {
    super();
    this.labelMap = labelMap;
    this.nativeModule = nativeModule;
  }

  // TODO: figure it out so we can delete this (we need this because of basemodule inheritance)
  async load() {}
}
//# sourceMappingURL=VisionLabeledModule.js.map