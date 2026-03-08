import { ResourceSource } from '..';
/**
 * Http status codes
 *
 * @category Types
 */
export declare enum HTTP_CODE {
    /** * Everything is ok.
     */
    OK = 200,
    /** * Server has fulfilled a client request for a specific part of a resource, instead of sending the entire file.
     */
    PARTIAL_CONTENT = 206
}
/**
 * Download status of the file.
 *
 * @category Types
 */
export declare enum DownloadStatus {
    /**
     * Download is still in progress.
     */
    ONGOING = 0,
    /**
     * Download is paused.
     */
    PAUSED = 1
}
/**
 * Types of sources that can be downloaded
 *
 * @category Types
 */
export declare enum SourceType {
    /**
     * Represents a raw object or data structure.
     */
    OBJECT = 0,
    /**
     * Represents a file stored locally on the filesystem.
     */
    LOCAL_FILE = 1,
    /**
     * Represents a file bundled with the application in release mode.
     */
    RELEASE_MODE_FILE = 2,
    /**
     * Represents a file served via the metro bundler during development.
     */
    DEV_MODE_FILE = 3,
    /**
     * Represents a file located at a remote URL.
     */
    REMOTE_FILE = 4
}
/**
 * Extended interface for resource sources, tracking download state and file locations.
 *
 * @category Interfaces
 */
export interface ResourceSourceExtended {
    /**
     * The original source definition.
     */
    source: ResourceSource;
    /**
     * The type of the source (local, remote, etc.).
     */
    sourceType: SourceType;
    /**
     * Optional callback to report download progress (0 to 1).
     */
    callback?: (downloadProgress: number) => void;
    /**
     * Array of paths or identifiers for the resulting files.
     */
    results: string[];
    /**
     * The URI of the resource.
     */
    uri?: string;
    /**
     * The local file URI where the resource is stored.
     */
    fileUri?: string;
    /**
     * The URI where the file is cached.
     */
    cacheFileUri?: string;
    /**
     * Reference to the next resource in a linked chain of resources.
     */
    next?: ResourceSourceExtended;
}
/**
 * Utility functions for fetching and managing resources.
 *
 * @category Utilities - General
 */
export declare namespace ResourceFetcherUtils {
    /**
     * Removes the 'file://' prefix from a URI if it exists.
     * @param uri - The URI to process.
     * @returns The URI without the 'file://' prefix.
     */
    function removeFilePrefix(uri: string): string;
    /**
     * Generates a hash from a string representation of an object.
     * @param jsonString - The stringified JSON object to hash.
     * @returns The resulting hash as a string.
     */
    function hashObject(jsonString: string): string;
    /**
     * Creates a progress callback that scales the current file's progress
     * relative to the total size of all files being downloaded.
     * @param totalLength - The total size of all files in the download batch.
     * @param previousFilesTotalLength - The sum of sizes of files already downloaded.
     * @param currentFileLength - The size of the file currently being downloaded.
     * @param setProgress - The main callback to update the global progress.
     * @returns A function that accepts the progress (0-1) of the current file.
     */
    function calculateDownloadProgress(totalLength: number, previousFilesTotalLength: number, currentFileLength: number, setProgress: (downloadProgress: number) => void): (progress: number) => void;
    /**
     * Increments the Hugging Face download counter if the URI points to a Software Mansion Hugging Face repo.
     * More information: https://huggingface.co/docs/hub/models-download-stats
     * @param uri - The URI of the file being downloaded.
     */
    function triggerHuggingFaceDownloadCounter(uri: string): Promise<void>;
    /**
     * Generates a safe filename from a URI by removing the protocol and replacing special characters.
     * @param uri - The source URI.
     * @returns A sanitized filename string.
     */
    function getFilenameFromUri(uri: string): string;
}
