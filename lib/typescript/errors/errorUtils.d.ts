import { RnExecutorchErrorCode } from './ErrorCodes';
/**
 * Custom error class for React Native ExecuTorch errors.
 */
export declare class RnExecutorchError extends Error {
    /**
     * The error code representing the type of error.
     */
    code: RnExecutorchErrorCode;
    /**
     * The original cause of the error, if any.
     */
    cause?: unknown;
    constructor(code: number, message: string, cause?: unknown);
}
export declare function parseUnknownError(e: unknown): RnExecutorchError;
