"use strict";

/**
 * High level wrapper that prefixes `console.<command>` with [React Native ExecuTorch] tag.
 */
/* eslint-disable no-console */
export class Logger {
  static PREFIX = '[React Native ExecuTorch]';
  static log(...data) {
    console.log(Logger.PREFIX, ...data);
  }
  static debug(...data) {
    console.debug(Logger.PREFIX, ...data);
  }
  static info(...data) {
    console.info(Logger.PREFIX, ...data);
  }
  static warn(...data) {
    console.warn(Logger.PREFIX, ...data);
  }
  static error(...data) {
    console.error(Logger.PREFIX, ...data);
  }
}
//# sourceMappingURL=Logger.js.map