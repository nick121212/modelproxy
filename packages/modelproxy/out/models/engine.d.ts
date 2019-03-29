import { IInterfaceModel } from "./interface";
import { IExecute } from "../models/execute";
export interface IEngine<T> {
    validate(instance: IInterfaceModel<T>, options: IExecute): Promise<boolean>;
    proxy(instance: IInterfaceModel<T>, options: IExecute, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel<T>): string;
    getFullPath(instance: IInterfaceModel<T>, options: IExecute): string;
    replacePath(instance: IInterfaceModel<T>, options: IExecute): string;
}
