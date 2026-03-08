import { StyleTransferProps, StyleTransferType } from '../../types/styleTransfer';
/**
 * React hook for managing a Style Transfer model instance.
 *
 * @category Hooks
 * @param StyleTransferProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Style Transfer model.
 */
export declare const useStyleTransfer: ({ model, preventLoad, }: StyleTransferProps) => StyleTransferType;
