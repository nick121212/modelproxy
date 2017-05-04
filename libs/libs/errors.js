"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseError = (function () {
    function BaseError(message) {
        this.message = message;
        this.stack = (new Error()).stack;
    }
    return BaseError;
}());
exports.BaseError = BaseError;
/**
 * tv4验证错误后返回错误类
 */
var ModelProxyValidaterError = (function (_super) {
    __extends(ModelProxyValidaterError, _super);
    function ModelProxyValidaterError(message, error, missing) {
        var _this = _super.call(this, message) || this;
        // Object.setPrototypeOf(this, ModelProxyValidaterError.prototype);
        _this.name = "ModelProxy.ValidaterError";
        _this.error = error;
        _this.missing = missing;
        return _this;
    }
    return ModelProxyValidaterError;
}(BaseError));
exports.ModelProxyValidaterError = ModelProxyValidaterError;
/**
 * 缺少Engine返回错误类
 */
var ModelProxyMissingError = (function (_super) {
    __extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        // Object.setPrototypeOf(this, ModelProxyMissingError.prototype);
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
//# sourceMappingURL=errors.js.map