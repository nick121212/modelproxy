import { IInterfaceModel } from '../models/interface';
import { BaseEngine } from './engine.base';
import { IExecute } from '../models/execute';
export declare class DefaultEngine extends BaseEngine {
    constructor();
    proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
}
