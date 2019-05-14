import { IProxyCtx } from "../models/proxyctx";
export declare class BaseError implements Error {
    name: string;
    message: string;
    stack: string | undefined;
    constructor(message?: string);
}
export declare class ModelProxyMissingError extends BaseError {
    constructor(message: string);
}
export declare class MPError extends BaseError {
    code: string;
    errData: IProxyCtx<any, any> | undefined;
    constructor(message: string, code: string, errData?: IProxyCtx<any, any> | undefined);
}
