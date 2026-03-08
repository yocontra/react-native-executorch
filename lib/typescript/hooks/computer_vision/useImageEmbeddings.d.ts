import { ImageEmbeddingsProps, ImageEmbeddingsType } from '../../types/imageEmbeddings';
/**
 * React hook for managing an Image Embeddings model instance.
 *
 * @category Hooks
 * @param ImageEmbeddingsProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Image Embeddings model.
 */
export declare const useImageEmbeddings: ({ model, preventLoad, }: ImageEmbeddingsProps) => ImageEmbeddingsType;
