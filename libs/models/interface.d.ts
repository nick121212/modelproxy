/// <reference types="tv4" />
import { MethodType } from "./method";
import { ICommon } from "./common";
export interface IInterfaceModel extends ICommon {
    ns?: string;
    method?: MethodType;
    path?: string;
    config?: Object;
    dataSchema?: tv4.JsonSchema;
    paramsSchema?: tv4.JsonSchema;
}
