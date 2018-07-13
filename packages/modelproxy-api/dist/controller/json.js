"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const generate_schema_1 = tslib_1.__importDefault(require("generate-schema"));
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const json_schema_faker_1 = require("json-schema-faker");
json_schema_faker_1.extend("rule", function () {
    return require("mockjs");
});
/**
 * json相关操作
 */
let JsonSchemaController = class JsonSchemaController {
    getJsonSchema(title, id, json) {
        const jsonSchema = generate_schema_1.default.json(title, json);
        jsonSchema.$id = id;
        return jsonSchema;
    }
    getJson(jsonSchema, option) {
        json_schema_faker_1.option(Object.assign({
            optionalsProbability: 0.5,
            minItems: 11
        }, option || {}));
        return json_schema_faker_1.resolve(jsonSchema);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post("/json2schema"),
    tslib_1.__param(0, routing_controllers_1.BodyParam("title")), tslib_1.__param(1, routing_controllers_1.BodyParam("id")), tslib_1.__param(2, routing_controllers_1.BodyParam("json")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], JsonSchemaController.prototype, "getJsonSchema", null);
tslib_1.__decorate([
    routing_controllers_1.Post("/schema2json"),
    tslib_1.__param(0, routing_controllers_1.BodyParam("jsonSchema")), tslib_1.__param(1, routing_controllers_1.BodyParam("option", { required: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], JsonSchemaController.prototype, "getJson", null);
JsonSchemaController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.JsonController("/jsonschema")
], JsonSchemaController);
exports.JsonSchemaController = JsonSchemaController;
//# sourceMappingURL=json.js.map