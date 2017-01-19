import { MethodType } from "./method";
import { IInterfaceModel } from './interface';
import { ICommon } from "./common";

/**
 * 接口模型
 */
export interface IProxyConfig extends ICommon {
    // mock规则目录
    mockDir: string;
}