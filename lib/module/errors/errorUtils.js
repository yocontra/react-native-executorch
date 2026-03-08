"use strict";

import { RnExecutorchErrorCode } from './ErrorCodes';

/**
 * Custom error class for React Native ExecuTorch errors.
 */
export class RnExecutorchError extends Error {
  /**
   * The error code representing the type of error.
   */

  /**
   * The original cause of the error, if any.
   */

  constructor(code, message, cause) {
    super(message);
    /**
     * The error code representing the type of error.
     */
    this.code = code;

    /**
     * The message describing the error.
     */
    this.message = message;

    /**
     * The original cause of the error, if any.
     */
    this.cause = cause;
  }
}
function isRnExecutorchErrorLike(e) {
  const candidate = e;
  return typeof e === 'object' && e !== null && typeof candidate.code === 'number' && typeof candidate.message === 'string';
}
export function parseUnknownError(e) {
  if (e instanceof RnExecutorchError) {
    return e;
  }
  if (isRnExecutorchErrorLike(e)) {
    return new RnExecutorchError(e.code, e.message);
  }
  if (e instanceof Error) {
    return new RnExecutorchError(RnExecutorchErrorCode.Internal, e.message, e);
  }
  if (typeof e === 'string') {
    return new RnExecutorchError(RnExecutorchErrorCode.Internal, e);
  }
  return new RnExecutorchError(RnExecutorchErrorCode.Internal, String(e));
}
//# sourceMappingURL=errorUtils.js.map