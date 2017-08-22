// import * as tv4 from "tv4";

export class BaseError implements Error {
    public name: string;
    public message: string;
    public stack: string | undefined;

    constructor(message?: string) {
        this.message = message ? message : "";
        this.stack = (new Error()).stack;
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
