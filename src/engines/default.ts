import { IEngine } from "../models/engine";
import { IInterfaceModel } from '../models/interface';

export class DefaultEngine implements IEngine {
    constructor() {

    }

    validate(data: any): boolean {
        return true;
    }

    async proxy( intance: IInterfaceModel, data: any, params: any) {
        return data;
    }
}