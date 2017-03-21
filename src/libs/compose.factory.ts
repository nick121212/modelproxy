import { IEngine } from '../models/engine';
import { IInterfaceModel } from "../models/interface";
import { MethodType } from '../models/method';
import * as factory from "./base.factory";
import * as engineFactory from "./engine.factory";
import { IExeucte } from '../models/execute';
import * as tv4 from "tv4";
import * as compose from "./compose";

export namespace ModelProxy {
    export class ComposeFactory extends factory.ModelProxy.BaseFactory<compose.ModelProxy.Compose<any>> {
        constructor() { super(); }

       
    }
}