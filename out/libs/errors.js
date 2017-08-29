"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError {
    constructor(message) {
        this.message = message ? message : "";
        this.stack = (new Error()).stack;
    }
}
exports.BaseError = BaseError;
class ModelProxyMissingError extends BaseError {
    constructor(message) {
        super(message);
        this.name = "ModelProxy.MissingError";
    }
}
exports.ModelProxyMissingError = ModelProxyMissingError;
