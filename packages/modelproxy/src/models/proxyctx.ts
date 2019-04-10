import {IExecute} from "./execute";

export interface IProxyCtx<D, P> extends IExecute<D, P> {
    isError?: boolean;
    err?: Error;
    result?: any;
    executeInfo?: IExecute<D, P>;
    fromCache?: boolean;
}
