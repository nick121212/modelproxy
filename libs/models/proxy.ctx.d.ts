import { IInterfaceModel } from './interface';
export interface IProxyCtx {
    instance: IInterfaceModel;
    data?: any;
    params?: any;
    isError?: boolean;
    err?: Error;
    result?: any;
}
