import { EntityParamOptions } from "typeorm-routing-controllers-extensions";
/**
 * 一个获取Repo的装饰器
 * @param options 参数
 */
export declare function Respository(options?: EntityParamOptions): (object: Object, methodName: string, index: number) => void;
