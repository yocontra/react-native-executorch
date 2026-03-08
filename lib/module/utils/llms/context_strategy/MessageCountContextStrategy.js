"use strict";

/**
 * A simple context strategy that retains a fixed number of the most recent messages.
 * This strategy trims the conversation history based purely on the message count.
 *
 * @category Utils
 */
export class MessageCountContextStrategy {
  /**
   * Initializes the MessageCountContextStrategy.
   * * @param {number} windowLength - The maximum number of recent messages to retain in the context. Defaults to 5.
   */
  constructor(windowLength = 5) {
    this.windowLength = windowLength;
  }

  /**
   * Builds the context by slicing the history to retain only the most recent `windowLength` messages.
   *
   * @param {string} systemPrompt - The top-level instructions for the model.
   * @param {Message[]} history - The complete conversation history.
   * @param {(messages: Message[]) => number} _getTokenCount - Unused in this strategy.
   * @param {number} _maxContextLength - Unused in this strategy.
   * @returns {Message[]} The truncated message history with the system prompt at the beginning.
   */
  buildContext(systemPrompt, history, _maxContextLength, _getTokenCount) {
    return [{
      content: systemPrompt,
      role: 'system'
    }, ...history.slice(-this.windowLength)];
  }
}
//# sourceMappingURL=MessageCountContextStrategy.js.map