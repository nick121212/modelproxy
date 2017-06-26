// import * as tv4 from "tv4";

export class BaseError implements Error {
    public name: string;
    public message: string;
    public stack: string;
    
    constructor(message?: string) {
        this.message = message;

        this.stack = (new Error()).stack;
    }
}

/**
 * tv4验证错误后返回错误类
 */
export class ModelProxyValidaterError extends BaseError {
    error: Array<tv4.ValidationError> | tv4.ValidationError;
    missing: Array<any>;

    constructor(message: string, error: Array<tv4.ValidationError> | tv4.ValidationError, missing?: Array<any>) {
        super(message);
        // Object.setPrototypeOf(this, ModelProxyValidaterError.prototype);
        this.name = "ModelProxy.ValidaterError";
        this.error = error;
        this.missing = missing;
    }
}

/**
 * 缺少Engine返回错误类
 */
export class ModelProxyMissingError extends BaseError {
    constructor(message: string) {
        super(message);
        // Object.setPrototypeOf(this, ModelProxyMissingError.prototype);
        this.name = "ModelProxy.MissingError";
    }
}