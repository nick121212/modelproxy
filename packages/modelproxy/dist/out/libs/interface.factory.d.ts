import { IInterfaceModel } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from "../models/execute";
export declare class InterfaceFactory extends BaseFactory<IInterfaceModel> {
    constructor();
    add(name: string, instance: IInterfaceModel, override?: boolean): void;
    execute(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any>;
    custom(instance: IInterfaceModel, type: string, id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    private megreInstance(instance, extendInstance?);
    private executeEngineMethod(instance, extendInstance, method);
    private getPath(instance, extendInstance?);
    private getFullPath(instance, options?);
    private replacePath(instance, options?);
}
