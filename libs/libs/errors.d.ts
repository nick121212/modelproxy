/// <reference types="tv4" />
import * as tv4 from "tv4";
export declare class BaseError implements Error {
    name: string;
    message: string;
    stack: string;
    constructor(message?: string);
}
export declare class ModelProxyValidaterError extends BaseError {
    error: Array<tv4.ValidationError> | tv4.ValidationError;
    missing: Array<any>;
    constructor(message: string, error: Array<tv4.ValidationError> | tv4.ValidationError, missing?: Array<any>);
}
export declare class ModelProxyMissingError extends BaseError {
    constructor(message: string);
}
