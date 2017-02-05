import { IInterfaceModel } from './interface';

export interface IEngine {
    validate(data: any): boolean;
    proxy( intance: IInterfaceModel, data: any, params: any): any;
}