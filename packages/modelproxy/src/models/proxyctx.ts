import { IExecute } from "./execute";
import { IInterfaceModel } from "./interface";

export interface IProxyCtx extends IExecute {
    isError?: boolean;
    err?: Error;
    result?: any;
    executeInfo?: IExecute;
}
