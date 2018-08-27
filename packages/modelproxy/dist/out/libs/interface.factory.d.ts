import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from "../models/execute";
export declare class InterfaceFactory extends BaseFactory<IInterfaceModel> {
    readonly overrideInterfaceConfig: IInterfaceModelCommon;
    constructor(overrideInterfaceConfig: IInterfaceModelCommon);
    add(name: string, instance: IInterfaceModel, override?: boolean): void;
    execute(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any>;
    custom(instance: IInterfaceModel, type: string, id?: string | number | null, options?: IExecute, ...otherOptions: any[]): Promise<any>;
    private megreInstance;
    private executeEngineMethod;
    private getPath;
    private getFullPath;
    private replacePath;
}
