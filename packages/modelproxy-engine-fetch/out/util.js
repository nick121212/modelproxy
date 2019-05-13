"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalObj = typeof window === "undefined" ? global : window;
function isWin(obj = exports.globalObj) {
    return /Window/.test({}.toString.call(obj)) || (obj == obj.document && obj.document != obj);
}
exports.isWin = isWin;
//# sourceMappingURL=util.js.map