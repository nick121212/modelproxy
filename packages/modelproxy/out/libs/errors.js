"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
    __extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
var MPError = (function (_super) {
    __extends(MPError, _super);
    function MPError(message, code, errData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.errData = errData;
        _this.name = "MPError";
        return _this;
    }
    return MPError;
}(BaseError));
exports.MPError = MPError;
