import { default as gs } from "generate-schema";
import { JsonController, Post, BodyParam } from "routing-controllers";
import { injectable } from "inversify";
import { resolve, option as jsfOption, extend } from "json-schema-faker";
import { JSONSchema4 } from "json-schema";

extend("rule", function () {
    return require("mockjs");
});

/**
 * json相关操作
 */
@injectable()
@JsonController("/jsonschema")
export class JsonSchemaController {
    @Post("/json2schema")
    getJsonSchema(@BodyParam("title") title: string, @BodyParam("id") id: string, @BodyParam("json") json: any) {
        const jsonSchema = gs.json(title, json);

        jsonSchema.$id = id;

        return jsonSchema;
    }

    @Post("/schema2json")
    getJson(@BodyParam("jsonSchema") jsonSchema: JSONSchema4, @BodyParam("option", { required: false }) option: any) {
        jsfOption(Object.assign({
            optionalsProbability: 0.5,
            minItems: 11
        }, option || {}));

        return resolve(jsonSchema);
    }

}