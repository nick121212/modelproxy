import { IInterfaceModel } from "./interface";
import { IExecute } from "../models/execute";

export interface IEngine {
    validate(intance: IInterfaceModel, options: IExecute): boolean;
    proxy(intance: IInterfaceModel, options: IExecute): Promise<any>;
    getStatePath(instance: IInterfaceModel): string;
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
}
