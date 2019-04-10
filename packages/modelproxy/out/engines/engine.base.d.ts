import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
export declare class BaseEngine<T extends IProxyCtx<D, P>, D, P extends {
    [key: string]: any;
}, C> extends Compose<T> implements IEngine<C> {
    validate(_instance: IInterfaceModel<D, P, C>, _options: IExecute<D, P>): Promise<boolean>;
    delay(interval: number): Promise<any>;
    proxy(instance: IInterfaceModel<D, P, C>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel<D, P, C>): string;
    replacePath(instance: IInterfaceModel<D, P, C>, {params}: IExecute<D, P>): string;
    getFullPath(instance: IInterfaceModel<D, P, C>, options: IExecute<D, P>): string;
}
