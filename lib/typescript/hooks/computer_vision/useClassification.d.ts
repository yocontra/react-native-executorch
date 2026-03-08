import { ClassificationProps, ClassificationType } from '../../types/classification';
/**
 * React hook for managing a Classification model instance.
 *
 * @category Hooks
 * @param ClassificationProps - Configuration object containing `model` source and optional `preventLoad` flag.
 * @returns Ready to use Classification model.
 */
export declare const useClassification: ({ model, preventLoad, }: ClassificationProps) => ClassificationType;
