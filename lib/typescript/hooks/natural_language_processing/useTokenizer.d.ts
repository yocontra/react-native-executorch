import { TokenizerProps, TokenizerType } from '../../types/tokenizer';
/**
 * React hook for managing a Tokenizer instance.
 *
 * @category Hooks
 * @param tokenizerProps - Configuration object containing `tokenizer` source and optional `preventLoad` flag.
 * @returns Ready to use Tokenizer model.
 */
export declare const useTokenizer: ({ tokenizer, preventLoad, }: TokenizerProps) => TokenizerType;
