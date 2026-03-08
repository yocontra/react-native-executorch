import { ResourceSource } from '../types/common';
import { ChatConfig, GenerationConfig, LLMTool, Message, ToolsConfig } from '../types/llm';
export declare class LLMController {
    private nativeModule;
    private chatConfig;
    private toolsConfig;
    private tokenizerConfig;
    private onToken?;
    private _isReady;
    private _isGenerating;
    private _messageHistory;
    private tokenCallback;
    private messageHistoryCallback;
    private isReadyCallback;
    private isGeneratingCallback;
    constructor({ tokenCallback, messageHistoryCallback, isReadyCallback, isGeneratingCallback, }: {
        tokenCallback?: (token: string) => void;
        messageHistoryCallback?: (messageHistory: Message[]) => void;
        isReadyCallback?: (isReady: boolean) => void;
        isGeneratingCallback?: (isGenerating: boolean) => void;
    });
    get isReady(): boolean;
    get isGenerating(): boolean;
    get messageHistory(): Message[];
    load({ modelSource, tokenizerSource, tokenizerConfigSource, onDownloadProgressCallback, }: {
        modelSource: ResourceSource;
        tokenizerSource: ResourceSource;
        tokenizerConfigSource: ResourceSource;
        onDownloadProgressCallback?: (downloadProgress: number) => void;
    }): Promise<void>;
    setTokenCallback(tokenCallback: (token: string) => void): void;
    configure({ chatConfig, toolsConfig, generationConfig, }: {
        chatConfig?: Partial<ChatConfig>;
        toolsConfig?: ToolsConfig;
        generationConfig?: GenerationConfig;
    }): void;
    private filterSpecialTokens;
    delete(): void;
    forward(input: string): Promise<string>;
    interrupt(): void;
    getGeneratedTokenCount(): number;
    getPromptTokenCount(): number;
    getTotalTokenCount(): number;
    generate(messages: Message[], tools?: LLMTool[]): Promise<string>;
    sendMessage(message: string): Promise<string>;
    deleteMessage(index: number): void;
    private applyChatTemplate;
}
