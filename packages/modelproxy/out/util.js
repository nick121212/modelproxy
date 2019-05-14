"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalObj = typeof window === "undefined" ? global : window;
function isWin(obj) {
    if (obj === void 0) { obj = exports.globalObj; }
    return /Window/.test({}.toString.call(obj)) || (obj == obj.document && obj.document != obj);
}
exports.isWin = isWin;
if (!exports.globalObj.URLSearchParams) {
    exports.globalObj.URLSearchParams = require("url-search-params");
}
