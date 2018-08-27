import { IInterfaceModel } from "./interface";
import { IExecute } from "../models/execute";
export interface IEngine {
    validate(intance: IInterfaceModel, options: IExecute): Promise<boolean>;
    proxy(intance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel): string;
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
    replacePath(instance: IInterfaceModel, options: IExecute): string;
}
