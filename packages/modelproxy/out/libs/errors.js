"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BaseError = (function () {
    function BaseError(message) {
        this.name = "";
        this.message = message ? message : "";
        this.stack = new Error().stack;
    }
    return BaseError;
}());
exports.BaseError = BaseError;
var ModelProxyMissingError = (function (_super) {
    tslib_1.__extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
