import { IInterfaceModel } from './interface';
import { ICommon } from "./common";
export interface IProxyConfig extends ICommon {
    interfaces: Array<IInterfaceModel>;
}
