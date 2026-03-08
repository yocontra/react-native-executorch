"use strict";

import { ExecutorchModule } from '../../modules/general/ExecutorchModule';
import { useModule } from '../useModule';

/**
 * React hook for managing an arbitrary Executorch module instance.
 *
 * @category Hooks
 * @param executorchModuleProps - Configuration object containing `modelSource` and optional `preventLoad` flag.
 * @returns Ready to use Executorch module.
 */
export const useExecutorchModule = ({
  modelSource,
  preventLoad = false
}) => useModule({
  module: ExecutorchModule,
  model: modelSource,
  preventLoad
});
//# sourceMappingURL=useExecutorchModule.js.map