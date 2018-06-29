export declare class BaseError implements Error {
    name: string;
    message: string;
    stack: string | undefined;
    constructor(message?: string);
}
export declare class ModelProxyMissingError extends BaseError {
    constructor(message: string);
}
