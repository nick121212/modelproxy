import {IInterfaceModel} from "./interface";
import {IExecute} from "../models/execute";

export interface IEngine<T> {
    validate(instance: IInterfaceModel<any, any, T>, options: IExecute<any, any>): Promise<boolean>;
    proxy(instance: IInterfaceModel<any, any, T>, options: IExecute<any, any>, ...otherOptions: any[]): Promise<any>;
    getStatePath(instance: IInterfaceModel<any, any, T>): string;
    getFullPath(instance: IInterfaceModel<any, any, T>, options: IExecute<any, any>): string;
    replacePath(instance: IInterfaceModel<any, any, T>, options: IExecute<any, any>): string;
}
