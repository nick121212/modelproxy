import { IExecute } from './execute';
export interface IProxyCtx extends IExecute {
    isError?: boolean;
    err?: Error;
    result?: any;
    executeInfo?: IExecute;
}
