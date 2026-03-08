"use strict";

import { ImageEmbeddingsModule } from '../../modules/computer_vision/ImageEmbeddingsModule';
import { useModule } from '../useModule';

/**
 * React hook for managing an Image Embeddings model instance.
 *
 * @category Hooks
 * @param ImageEmbeddingsProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Image Embeddings model.
 */
export const useImageEmbeddings = ({
  model,
  preventLoad = false
}) => useModule({
  module: ImageEmbeddingsModule,
  model,
  preventLoad
});
//# sourceMappingURL=useImageEmbeddings.js.map