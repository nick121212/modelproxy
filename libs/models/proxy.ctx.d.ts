import { IExecute } from './execute';
export interface IProxyCtx {
    isError?: boolean;
    err?: Error;
    result?: any;
    executeInfo?: IExecute;
}
