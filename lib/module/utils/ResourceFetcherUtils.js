"use strict";

/**
 * Http status codes
 *
 * @category Types
 */
export let HTTP_CODE = /*#__PURE__*/function (HTTP_CODE) {
  /** * Everything is ok.
   */
  HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
  /** * Server has fulfilled a client request for a specific part of a resource, instead of sending the entire file.
   */
  HTTP_CODE[HTTP_CODE["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  return HTTP_CODE;
}({});

/**
 * Download status of the file.
 *
 * @category Types
 */
export let DownloadStatus = /*#__PURE__*/function (DownloadStatus) {
  /**
   * Download is still in progress.
   */
  DownloadStatus[DownloadStatus["ONGOING"] = 0] = "ONGOING";
  /**
   * Download is paused.
   */
  DownloadStatus[DownloadStatus["PAUSED"] = 1] = "PAUSED";
  return DownloadStatus;
}({});

/**
 * Types of sources that can be downloaded
 *
 * @category Types
 */
export let SourceType = /*#__PURE__*/function (SourceType) {
  /**
   * Represents a raw object or data structure.
   */
  SourceType[SourceType["OBJECT"] = 0] = "OBJECT";
  /**
   * Represents a file stored locally on the filesystem.
   */
  SourceType[SourceType["LOCAL_FILE"] = 1] = "LOCAL_FILE";
  /**
   * Represents a file bundled with the application in release mode.
   */
  SourceType[SourceType["RELEASE_MODE_FILE"] = 2] = "RELEASE_MODE_FILE";
  /**
   * Represents a file served via the metro bundler during development.
   */
  SourceType[SourceType["DEV_MODE_FILE"] = 3] = "DEV_MODE_FILE";
  /**
   * Represents a file located at a remote URL.
   */
  SourceType[SourceType["REMOTE_FILE"] = 4] = "REMOTE_FILE";
  return SourceType;
}({});

/**
 * Extended interface for resource sources, tracking download state and file locations.
 *
 * @category Interfaces
 */
/**
 * Utility functions for fetching and managing resources.
 *
 * @category Utilities - General
 */
export let ResourceFetcherUtils;
(function (_ResourceFetcherUtils) {
  function removeFilePrefix(uri) {
    return uri.startsWith('file://') ? uri.slice(7) : uri;
  }
  _ResourceFetcherUtils.removeFilePrefix = removeFilePrefix;
  function hashObject(jsonString) {
    let hash = 0;
    for (let i = 0; i < jsonString.length; i++) {
      // eslint-disable-next-line no-bitwise
      hash = (hash << 5) - hash + jsonString.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      hash |= 0;
    }
    // eslint-disable-next-line no-bitwise
    return (hash >>> 0).toString();
  }
  _ResourceFetcherUtils.hashObject = hashObject;
  function calculateDownloadProgress(totalLength, previousFilesTotalLength, currentFileLength, setProgress) {
    return progress => {
      if (progress === 1 && previousFilesTotalLength === totalLength - currentFileLength) {
        setProgress(1);
        return;
      }

      // Avoid division by zero
      if (totalLength === 0) {
        setProgress(0);
        return;
      }
      const baseProgress = previousFilesTotalLength / totalLength;
      const scaledProgress = progress * (currentFileLength / totalLength);
      const updatedProgress = baseProgress + scaledProgress;
      setProgress(updatedProgress);
    };
  }
  _ResourceFetcherUtils.calculateDownloadProgress = calculateDownloadProgress;
  async function triggerHuggingFaceDownloadCounter(uri) {
    const url = new URL(uri);
    if (url.host === 'huggingface.co' && url.pathname.startsWith('/software-mansion/')) {
      const baseUrl = `${url.protocol}//${url.host}${url.pathname.split('resolve')[0]}`;
      fetch(`${baseUrl}resolve/main/config.json`, {
        method: 'HEAD'
      });
    }
  }
  _ResourceFetcherUtils.triggerHuggingFaceDownloadCounter = triggerHuggingFaceDownloadCounter;
  function getFilenameFromUri(uri) {
    let cleanUri = uri.replace(/^https?:\/\//, '');
    cleanUri = cleanUri.split('#')?.[0] ?? cleanUri;
    return cleanUri.replace(/[^a-zA-Z0-9._-]/g, '_');
  }
  _ResourceFetcherUtils.getFilenameFromUri = getFilenameFromUri;
})(ResourceFetcherUtils || (ResourceFetcherUtils = {}));
//# sourceMappingURL=ResourceFetcherUtils.js.map