import { EntityParamOptions } from "typeorm-routing-controllers-extensions";
import { getMetadataArgsStorage } from "routing-controllers";

import { getRespository } from "../utils/utils";

/**
 * 一个获取Repo的装饰器
 * @param options 参数
 */
export function Respository(options?: EntityParamOptions) {
    return function (object: Object, methodName: string, index: number) {
        const reflectedType = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        const target = options && options.type ? options.type : reflectedType;

        if (!target) {
            throw new Error("Cannot guess type if the parameter");
        }

        getMetadataArgsStorage().params.push({
            object: object,
            method: methodName,
            index: index,
            name: methodName,
            type: "param",
            parse: !!(options && options.parse),
            required: !!(options && options.required),
            transform: (_actionProperties: any, _value: any) => {
                return getRespository(target, options);
            }
        });
    };
}