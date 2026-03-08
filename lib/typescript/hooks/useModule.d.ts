import { RnExecutorchError } from '../errors/errorUtils';
type RunOnFrame<M> = M extends {
    runOnFrame: infer R;
} ? R : never;
interface Module {
    load: (...args: any[]) => Promise<void>;
    forward: (...args: any[]) => Promise<any>;
    delete: () => void;
}
interface ModuleConstructor<M extends Module> {
    new (): M;
}
export declare const useModule: <M extends Module, LoadArgs extends Parameters<M["load"]>, ForwardArgs extends Parameters<M["forward"]>, ForwardReturn extends Awaited<ReturnType<M["forward"]>>>({ module, model, preventLoad, }: {
    module: ModuleConstructor<M>;
    model: LoadArgs[0];
    preventLoad?: boolean;
}) => {
    /**
     * Contains the error message if the model failed to load.
     */
    error: RnExecutorchError | null;
    /**
     * Indicates whether the model is ready.
     */
    isReady: boolean;
    /**
     * Indicates whether the model is currently generating a response.
     */
    isGenerating: boolean;
    /**
     * Represents the download progress as a value between 0 and 1, indicating the extent of the model file retrieval.
     */
    downloadProgress: number;
    forward: (...input: ForwardArgs) => Promise<ForwardReturn>;
    /**
     * Synchronous worklet function for real-time VisionCamera frame processing.
     * Automatically handles native buffer extraction and cleanup.
     *
     * Only available for Computer Vision modules that support real-time frame processing
     * (e.g., ObjectDetection, Classification, ImageSegmentation).
     * Returns `null` if the module doesn't implement frame processing.
     *
     * **Use this for VisionCamera frame processing in worklets.**
     * For async processing, use `forward()` instead.
     *
     * @example
     * ```typescript
     * const { runOnFrame } = useObjectDetection({ model: MODEL });
     *
     * const frameOutput = useFrameOutput({
     *   onFrame(frame) {
     *     'worklet';
     *     if (!runOnFrame) return;
     *     const detections = runOnFrame(frame, 0.5);
     *     frame.dispose();
     *   }
     * });
     * ```
     */
    runOnFrame: RunOnFrame<M> | null;
};
export {};
