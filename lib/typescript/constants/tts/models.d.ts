/**
 * A Kokoro model instance which processes the text in batches of maximum 64 tokens.
 * Uses significant less memory than the medium model, but could produce
 * a lower quality speech due to forced, aggressive text splitting.
 *
 * @category Models - Text to Speech
 */
export declare const KOKORO_SMALL: {
    type: "kokoro";
    durationPredictorSource: string;
    synthesizerSource: string;
};
/**
 * A standard Kokoro instance which processes the text in batches of maximum 128 tokens.
 *
 * @category Models - Text to Speech
 */
export declare const KOKORO_MEDIUM: {
    type: "kokoro";
    durationPredictorSource: string;
    synthesizerSource: string;
};
