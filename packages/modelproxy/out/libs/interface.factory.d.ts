import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from "../models/execute";
export declare class InterfaceFactory<R, D, P extends {
    [key: string]: any;
}, C> extends BaseFactory<IInterfaceModel<R, D, P, C>> {
    readonly overrideInterfaceConfig: IInterfaceModelCommon<C> | undefined;
    constructor(overrideInterfaceConfig?: IInterfaceModelCommon<C> | undefined);
    add(name: string, instance: IInterfaceModel<R, D, P, C>, override?: boolean): void;
    execute(instance: IInterfaceModel<R, D, P, C>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    custom(instance: IInterfaceModel<R, D, P, C>, type: string, id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<R>;
    private mergeInstance(instance, extendInstance?);
    private executeEngineMethod(instance, extendInstance, method, options?);
    private getPath(instance, extendInstance?);
    private getFullPath(instance, options?);
    private replacePath(instance, options?);
}
