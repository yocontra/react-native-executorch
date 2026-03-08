import { ExecutorchModuleProps, ExecutorchModuleType } from '../../types/executorchModule';
/**
 * React hook for managing an arbitrary Executorch module instance.
 *
 * @category Hooks
 * @param executorchModuleProps - Configuration object containing `modelSource` and optional `preventLoad` flag.
 * @returns Ready to use Executorch module.
 */
export declare const useExecutorchModule: ({ modelSource, preventLoad, }: ExecutorchModuleProps) => ExecutorchModuleType;
