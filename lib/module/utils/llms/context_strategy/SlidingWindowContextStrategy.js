"use strict";

/**
 * An advanced, token-aware context strategy that dynamically trims the message history
 * to ensure it fits within the model's physical context limits.
 * * This strategy calculates the exact token count of the formatted prompt. If the prompt
 * exceeds the allowed token budget (`maxContextLength` - `bufferTokens`), it recursively
 * removes the oldest messages.
 *
 * @category Utils
 */
export class SlidingWindowContextStrategy {
  /**
   * Initializes the SlidingWindowContextStrategy.
   * @param {number} bufferTokens - The number of tokens to keep free for the model's generated response (e.g., 1000).
   * @param {boolean} allowOrphanedAssistantMessages - Whether to allow orphaned assistant messages when trimming the history.
   * If false, the strategy will ensure that an assistant message is not left without its preceding user message.
   */
  constructor(bufferTokens, allowOrphanedAssistantMessages = false) {
    this.bufferTokens = bufferTokens;
    this.allowOrphanedAssistantMessages = allowOrphanedAssistantMessages;
  }

  /**
   * Builds the context by recursively evicting the oldest messages until the total
   * token count is safely within the defined budget.
   *
   * @param {string} systemPrompt - The top-level instructions for the model.
   * @param {Message[]} history - The complete conversation history.
   * @param {number} maxContextLength - Unused in this strategy, as the strategy relies on token count rather than message count.
   * @param {(messages: Message[]) => number} getTokenCount - Callback to calculate the exact token count of the rendered template.
   * @returns {Message[]} The optimized message history guaranteed to fit the token budget.
   */
  buildContext(systemPrompt, history, maxContextLength, getTokenCount) {
    let localHistory = [...history];
    const tokenBudget = maxContextLength - this.bufferTokens;
    while (localHistory.length > 1) {
      const candidateContext = [{
        content: systemPrompt,
        role: 'system'
      }, ...localHistory];
      if (getTokenCount(candidateContext) <= tokenBudget) {
        return candidateContext;
      }
      localHistory.shift();
      if (!this.allowOrphanedAssistantMessages) {
        // Prevent leaving an orphaned "assistant" response
        if (localHistory.length > 0 && localHistory[0]?.role === 'assistant') {
          localHistory.shift();
        }
      }
    }
    return [{
      content: systemPrompt,
      role: 'system'
    }, ...localHistory];
  }
}
//# sourceMappingURL=SlidingWindowContextStrategy.js.map