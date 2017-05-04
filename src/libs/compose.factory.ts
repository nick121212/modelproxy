import { IEngine } from '../models/engine';
import { IInterfaceModel } from "../models/interface";
import { MethodType } from '../models/method';
import * as factory from "./base.factory";
import * as compose from "./compose";

export namespace ModelProxy {
    export class ComposeFactory extends factory.ModelProxy.BaseFactory<compose.ModelProxy.Compose<any>> {
        constructor() { super(); }

       
    }
}