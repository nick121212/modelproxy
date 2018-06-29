import { IInterfaceModel, IInterfaceModelCommon } from "./interface";
import { ICommon } from "./common";

/**
 * 接口模型
 */
export interface IProxyConfig extends ICommon {
    // 接口的配置数组
    interfaces: Array<IInterfaceModelCommon>;
}
