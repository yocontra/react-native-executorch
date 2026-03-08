"use strict";

// Auto-generated from scripts/errors.config.ts
// DO NOT EDIT MANUALLY - Run 'yarn codegen:errors' to regenerate

export let RnExecutorchErrorCode = /*#__PURE__*/function (RnExecutorchErrorCode) {
  /**
   * An umbrella-error that is thrown usually when something unexpected happens, for example a 3rd-party library error.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["UnknownError"] = 101] = "UnknownError";
  /**
   * Thrown when a user tries to run a model that is not yet downloaded or loaded into memory.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ModuleNotLoaded"] = 102] = "ModuleNotLoaded";
  /**
   * An error ocurred when saving a file. This could be, for instance a result image from an image model.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["FileWriteFailed"] = 103] = "FileWriteFailed";
  /**
   * Thrown when a user tries to run a model that is currently processing. It is only allowed to run a single model prediction at a time.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ModelGenerating"] = 104] = "ModelGenerating";
  /**
   * Thrown when a language is passed to a multi-language model that is not supported. For example OCR or Speech To Text.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["LanguageNotSupported"] = 105] = "LanguageNotSupported";
  /**
   * Thrown when config parameters passed to a model are invalid. For example, when LLM's topp is outside of range [0, 1].
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidConfig"] = 112] = "InvalidConfig";
  /**
   * Thrown when the type of model source passed by the user is invalid.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidModelSource"] = 255] = "InvalidModelSource";
  /**
   * Thrown when the number of passed inputs to the model is different than the model metadata specifies.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["UnexpectedNumInputs"] = 97] = "UnexpectedNumInputs";
  /**
   * Thrown when React Native ExecuTorch threadpool problem occurs.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ThreadPoolError"] = 113] = "ThreadPoolError";
  /**
   * Thrown when a file read operation failed. This could be invalid image url passed to image models, or unsupported format.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["FileReadFailed"] = 114] = "FileReadFailed";
  /**
   * Thrown when the size of model output is unexpected.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidModelOutput"] = 115] = "InvalidModelOutput";
  /**
   * Thrown when the dimensions of input tensors don't match the model's expected dimensions.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["WrongDimensions"] = 116] = "WrongDimensions";
  /**
   * Thrown when the input passed to our APIs is invalid, for example when passing an empty message array to LLM's generate().
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidUserInput"] = 117] = "InvalidUserInput";
  /**
   * Thrown when the number of downloaded files is unexpected, due to download interruptions.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["DownloadInterrupted"] = 118] = "DownloadInterrupted";
  /**
   * Thrown when a feature or platform is not supported in the current environment.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["PlatformNotSupported"] = 119] = "PlatformNotSupported";
  /**
   * Thrown when an error occurs with the tokenizer or tokenization process.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["TokenizerError"] = 167] = "TokenizerError";
  /**
   * Thrown when there's a configuration mismatch between multilingual and language settings in Speech-to-Text models.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["MultilingualConfiguration"] = 160] = "MultilingualConfiguration";
  /**
   * Thrown when streaming transcription is attempted but audio data chunk is missing.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["MissingDataChunk"] = 161] = "MissingDataChunk";
  /**
   * Thrown when trying to stop or insert data into a stream that hasn't been started.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["StreamingNotStarted"] = 162] = "StreamingNotStarted";
  /**
   * Thrown when trying to start a new streaming session while another is already in progress.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["StreamingInProgress"] = 163] = "StreamingInProgress";
  /**
   * Thrown when a resource fails to download. This could be due to invalid URL, or for example a network problem.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherDownloadFailed"] = 180] = "ResourceFetcherDownloadFailed";
  /**
   * Thrown when a user tries to trigger a download that's already in progress.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherDownloadInProgress"] = 181] = "ResourceFetcherDownloadInProgress";
  /**
   * Thrown when trying to pause a download that is already paused.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherAlreadyPaused"] = 182] = "ResourceFetcherAlreadyPaused";
  /**
   * Thrown when trying to resume a download that is already ongoing.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherAlreadyOngoing"] = 183] = "ResourceFetcherAlreadyOngoing";
  /**
   * Thrown when trying to pause, resume, or cancel a download that is not active.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherNotActive"] = 184] = "ResourceFetcherNotActive";
  /**
   * Thrown when required URI information is missing for a download operation.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherMissingUri"] = 185] = "ResourceFetcherMissingUri";
  /**
   * Thrown when trying to load resources without fetcher initialization.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["ResourceFetcherAdapterNotInitialized"] = 186] = "ResourceFetcherAdapterNotInitialized";
  /**
   * Status indicating a successful operation.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["Ok"] = 0] = "Ok";
  /**
   * An internal error occurred.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["Internal"] = 1] = "Internal";
  /**
   * Status indicating the executor is in an invalid state for a targeted operation.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidState"] = 2] = "InvalidState";
  /**
   * Status indicating there are no more steps of execution to run
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["EndOfMethod"] = 3] = "EndOfMethod";
  /**
   * Operation is not supported in the current context.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["NotSupported"] = 16] = "NotSupported";
  /**
   * Operation is not yet implemented.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["NotImplemented"] = 17] = "NotImplemented";
  /**
   * User provided an invalid argument.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidArgument"] = 18] = "InvalidArgument";
  /**
   * Object is an invalid type for the operation.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidType"] = 19] = "InvalidType";
  /**
   * Operator(s) missing in the operator registry.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["OperatorMissing"] = 20] = "OperatorMissing";
  /**
   * Requested resource could not be found.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["NotFound"] = 32] = "NotFound";
  /**
   * Could not allocate the requested memory.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["MemoryAllocationFailed"] = 33] = "MemoryAllocationFailed";
  /**
   * Could not access a resource.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["AccessFailed"] = 34] = "AccessFailed";
  /**
   * Error caused by the contents of a program.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidProgram"] = 35] = "InvalidProgram";
  /**
   * Error caused by the contents of external data.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["InvalidExternalData"] = 36] = "InvalidExternalData";
  /**
   * Does not have enough resources to perform the requested operation.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["OutOfResources"] = 37] = "OutOfResources";
  /**
   * Init stage: Backend receives an incompatible delegate version.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["DelegateInvalidCompatibility"] = 48] = "DelegateInvalidCompatibility";
  /**
   * Init stage: Backend fails to allocate memory.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["DelegateMemoryAllocationFailed"] = 49] = "DelegateMemoryAllocationFailed";
  /**
   * Execute stage: The handle is invalid.
   */
  RnExecutorchErrorCode[RnExecutorchErrorCode["DelegateInvalidHandle"] = 50] = "DelegateInvalidHandle";
  return RnExecutorchErrorCode;
}({});
//# sourceMappingURL=ErrorCodes.js.map