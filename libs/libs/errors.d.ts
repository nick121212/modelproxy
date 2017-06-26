/// <reference types="tv4" />
export declare class BaseError implements Error {
    name: string;
    message: string;
    stack: string;
    constructor(message?: string);
}
/**
 * tv4验证错误后返回错误类
 */
export declare class ModelProxyValidaterError extends BaseError {
    error: Array<tv4.ValidationError> | tv4.ValidationError;
    missing: Array<any>;
    constructor(message: string, error: Array<tv4.ValidationError> | tv4.ValidationError, missing?: Array<any>);
}
/**
 * 缺少Engine返回错误类
 */
export declare class ModelProxyMissingError extends BaseError {
    constructor(message: string);
}
