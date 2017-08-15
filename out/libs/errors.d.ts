export declare class BaseError implements Error {
    name: string;
    message: string;
    stack: string | undefined;
    constructor(message?: string);
}
/**
 * 缺少Engine返回错误类
 */
export declare class ModelProxyMissingError extends BaseError {
    constructor(message: string);
}
