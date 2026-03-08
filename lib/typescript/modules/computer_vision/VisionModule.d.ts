import { BaseModule } from '../BaseModule';
import { Frame, PixelData } from '../../types/common';
export declare abstract class VisionModule<TOutput> extends BaseModule {
    /**
     * Synchronous worklet function for real-time VisionCamera frame processing.
     *
     * Only available after the model is loaded. Returns null if not loaded.
     *
     * **Use this for VisionCamera frame processing in worklets.**
     * For async processing, use `forward()` instead.
     *
     * @example
     * ```typescript
     * const model = new ClassificationModule();
     * await model.load({ modelSource: MODEL });
     *
     * // Use the functional form of setState to store the worklet — passing it
     * // directly would cause React to invoke it immediately as an updater fn.
     * const [runOnFrame, setRunOnFrame] = useState(null);
     * setRunOnFrame(() => model.runOnFrame);
     *
     * const frameOutput = useFrameOutput({
     *   onFrame(frame) {
     *     'worklet';
     *     if (!runOnFrame) return;
     *     const result = runOnFrame(frame);
     *     frame.dispose();
     *   }
     * });
     * ```
     */
    get runOnFrame(): ((frame: Frame, ...args: any[]) => TOutput) | null;
    /**
     * Executes the model's forward pass with automatic input type detection.
     *
     * Supports two input types:
     * 1. **String path/URI**: File path, URL, or Base64-encoded string
     * 2. **PixelData**: Raw pixel data from image libraries (e.g., NitroImage)
     *
     * **Note**: For VisionCamera frame processing, use `runOnFrame` instead.
     * This method is async and cannot be called in worklet context.
     *
     * @param input - Image source (string path or PixelData object)
     * @param args - Additional model-specific arguments
     * @returns A Promise that resolves to the model output.
     *
     * @example
     * ```typescript
     * // String path (async)
     * const result1 = await model.forward('file:///path/to/image.jpg');
     *
     * // Pixel data (async)
     * const result2 = await model.forward({
     *   dataPtr: new Uint8Array(pixelBuffer),
     *   sizes: [480, 640, 3],
     *   scalarType: ScalarType.BYTE
     * });
     *
     * // For VisionCamera frames, use runOnFrame in worklet:
     * const frameOutput = useFrameOutput({
     *   onFrame(frame) {
     *     'worklet';
     *     if (!model.runOnFrame) return;
     *     const result = model.runOnFrame(frame);
     *   }
     * });
     * ```
     */
    forward(input: string | PixelData, ...args: any[]): Promise<TOutput>;
}
