import { ToolCall } from '../types/llm';
import { Schema } from 'jsonschema';
import * as zCore from 'zod/v4/core';
/**
 * Parses tool calls from a given message string.
 *
 * @category Utilities - LLM
 * @param message - The message string containing tool calls in JSON format.
 * @returns An array of `ToolCall` objects extracted from the message.
 */
export declare const parseToolCall: (message: string) => ToolCall[];
/**
 * Generates a structured output prompt based on the provided schema.
 *
 * @category Utilities - LLM
 * @param responseSchema - The schema (Zod or JSON Schema) defining the desired output format.
 * @returns A prompt string instructing the model to format its output according to the given schema.
 */
export declare const getStructuredOutputPrompt: <T extends zCore.$ZodType>(responseSchema: T | Schema) => string;
/**
 * Fixes and validates structured output from LLMs against a provided schema.
 *
 * @category Utilities - LLM
 * @param output - The raw output string from the LLM.
 * @param responseSchema - The schema (Zod or JSON Schema) to validate the output against.
 * @returns The validated and parsed output.
 */
export declare const fixAndValidateStructuredOutput: <T extends zCore.$ZodType>(output: string, responseSchema: T | Schema) => zCore.output<T>;
