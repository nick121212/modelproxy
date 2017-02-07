import { IEngine } from "../models/engine";
import { IInterfaceModel } from '../models/interface';
import * as base from './base';
import * as _ from 'lodash';

export namespace ModelProxyEngine {
    export class DefaultEngine extends base.ModelProxyEngine.BaseEngine implements IEngine {
        constructor() {
            super();
        }

        validate(data: any): boolean {
            return true;
        }

        async proxy(intance: IInterfaceModel, data: any, params: any) {
            return data;
        }
    }
}
