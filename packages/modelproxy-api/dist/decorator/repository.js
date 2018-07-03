"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const utils_1 = require("../utils/utils");
/**
 * 一个获取Repo的装饰器
 * @param options 参数
 */
function Respository(options) {
    return function (object, methodName, index) {
        const reflectedType = Reflect.getMetadata("design:paramtypes", object, methodName)[index];
        const target = options && options.type ? options.type : reflectedType;
        if (!target) {
            throw new Error("Cannot guess type if the parameter");
        }
        routing_controllers_1.getMetadataArgsStorage().params.push({
            object: object,
            method: methodName,
            index: index,
            name: methodName,
            type: "param",
            parse: !!(options && options.parse),
            required: !!(options && options.required),
            transform: (_actionProperties, _value) => {
                return utils_1.getRespository(target, options);
            }
        });
    };
}
exports.Respository = Respository;
//# sourceMappingURL=repository.js.map