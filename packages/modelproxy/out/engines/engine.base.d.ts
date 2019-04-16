import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine<T extends IProxyCtx<D, P>, D, P extends {
    [key: string]: any;
}, C> extends Compose<T> implements IEngine<C> {
    validate(_instance: IInterfaceModel<any, D, P, C>, _options: IExecute<D, P>): Promise<boolean>;
    delay(interval: number): Promise<any>;
    proxy<R>(instance: IInterfaceModel<R, D, P, C>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel<any, D, P, C>): string;
    replacePath(instance: IInterfaceModel<any, D, P, C>, {params}: IExecute<D, P>): string;
    getFullPath(instance: IInterfaceModel<any, D, P, C>, options: IExecute<D, P>): string;
}
