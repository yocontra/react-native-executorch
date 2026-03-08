/**
 * High level wrapper that prefixes `console.<command>` with [React Native ExecuTorch] tag.
 */
export declare class Logger {
    private static readonly PREFIX;
    static log(...data: any[]): void;
    static debug(...data: any[]): void;
    static info(...data: any[]): void;
    static warn(...data: any[]): void;
    static error(...data: any[]): void;
}
