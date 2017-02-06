import { IEngine } from "../models/engine";
import * as factory from "./base.factory";
import * as engines from "../engines/default";

export namespace ModelProxy {
    export const engineFactory = new factory.ModelProxy.BaseFactory<IEngine>();

    engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
}

