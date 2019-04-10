import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from "../models/execute";
export declare class InterfaceFactory extends BaseFactory<IInterfaceModel<any, any, any>> {
    readonly overrideInterfaceConfig: IInterfaceModelCommon<any>;
    constructor(overrideInterfaceConfig: IInterfaceModelCommon<any>);
    add<D, P extends {
        [key: string]: any;
    }>(name: string, instance: IInterfaceModel<D, P, any>, override?: boolean): void;
    execute<D, P>(instance: IInterfaceModel<D, P, any>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    custom<D, P extends {
        [key: string]: any;
    }>(instance: IInterfaceModel<D, P, any>, type: string, id?: string | number | null, options?: IExecute<D, P>, ...otherOptions: any[]): Promise<any>;
    private mergeInstance(instance, extendInstance?);
    private executeEngineMethod(instance, extendInstance, method, options?);
    private getPath(instance, extendInstance?);
    private getFullPath(instance, options?);
    private replacePath(instance, options?);
}
