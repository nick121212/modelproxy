import { IProxyCtx } from "../models/proxyctx";

/**
 * 基础错误类
 * @export
 * @class BaseError
 * @implements {Error}
 */
export class BaseError implements Error {
    public name = "";
    public message: string;
    public stack: string | undefined;

    constructor(message?: string) {
        this.message = message ? message : "";
        this.stack = new Error().stack;
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

/**
 * MPError
 * @export
 * @class MPError
 * @extends {Error}
 */
export class MPError extends BaseError {
    constructor(message: string, public code: string, public errData?: IProxyCtx<any, any>) {
        super(message);

        this.name = "MPError";
    }
}
