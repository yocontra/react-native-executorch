import { RnExecutorchError } from '../errors/errorUtils';
type Deletable = {
    delete: () => void;
};
/**
 * Shared hook for modules that are instantiated via an async static factory
 * (i.e. `SomeModule.fromModelName(config, onProgress)`).
 *
 * Handles model loading, download progress, error state, and enforces the
 * not-loaded / already-generating guards so individual hooks only need to
 * define their typed `forward` wrapper.
 *
 * @internal
 */
export declare function useModuleFactory<M extends Deletable, Config extends {
    modelName: string;
    modelSource: unknown;
}>({ factory, config, preventLoad, }: {
    factory: (config: Config, onProgress: (progress: number) => void) => Promise<M>;
    config: Config;
    preventLoad?: boolean;
}): {
    error: RnExecutorchError | null;
    isReady: boolean;
    isGenerating: boolean;
    downloadProgress: number;
    runForward: <R>(fn: (instance: M) => Promise<R>) => Promise<R>;
    instance: M | null;
};
export {};
