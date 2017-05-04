import { IInterfaceModel } from './interface';
import { ICommon } from "./common";
/**
 * 接口模型
 */
export interface IProxyConfig extends ICommon {
    interfaces: Array<IInterfaceModel>;
}
