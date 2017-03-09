import { IInterfaceModel } from './interface';
import { IExeucte } from '../models/execute';

export interface IEngine {
    validate(intance: IInterfaceModel, options: IExeucte): boolean;
    proxy(intance: IInterfaceModel, options: IExeucte): Promise<any>;
    getStatePath(instance: IInterfaceModel):string;
}