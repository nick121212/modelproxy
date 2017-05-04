"use strict";
/**
 * 操作类型
 */
var MethodType;
(function (MethodType) {
    MethodType[MethodType["GET"] = 0] = "GET";
    MethodType[MethodType["POST"] = 1] = "POST";
    MethodType[MethodType["DELETE"] = 2] = "DELETE";
    MethodType[MethodType["PUT"] = 3] = "PUT";
    MethodType[MethodType["HEAD"] = 4] = "HEAD";
    MethodType[MethodType["PATCH"] = 5] = "PATCH";
    MethodType[MethodType["OPTIONS"] = 6] = "OPTIONS";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
//# sourceMappingURL=method.js.map