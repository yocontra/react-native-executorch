import { TextEmbeddingsType, TextEmbeddingsProps } from '../../types/textEmbeddings';
/**
 * React hook for managing a Text Embeddings model instance.
 *
 * @category Hooks
 * @param TextEmbeddingsProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Text Embeddings model.
 */
export declare const useTextEmbeddings: ({ model, preventLoad, }: TextEmbeddingsProps) => TextEmbeddingsType;
