import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from "../models/execute";
export declare class InterfaceFactory extends BaseFactory<IInterfaceModel<any>> {
    readonly overrideInterfaceConfig: IInterfaceModelCommon<any>;
    constructor(overrideInterfaceConfig: IInterfaceModelCommon<any>);
    add(name: string, instance: IInterfaceModel<any>, override?: boolean): void;
    execute(instance: IInterfaceModel<any>, options: IExecute, ...otherOptions: any[]): Promise<any>;
    custom(instance: IInterfaceModel<any>, type: string, id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    private mergeInstance(instance, extendInstance?);
    private executeEngineMethod(instance, extendInstance, method, options?);
    private getPath(instance, extendInstance?);
    private getFullPath(instance, options?);
    private replacePath(instance, options?);
}
