import * as _ from "lodash";

// 关键字	描述
// $schema	$schema 关键字状态，表示这个模式与 v4 规范草案书写一致。
// title	用它给我们的模式提供了标题。
// description	关于模式的描述。
// type	type 关键字在我们的 JSON 数据上定义了第一个约束：必须是一个 JSON 对象。
// properties	定义各种键和他们的值类型，以及用于 JSON 文件中的最小值和最大值。
// required	存放必要属性列表。
// minimum	给值设置的约束条件，表示可以接受的最小值。
// exclusiveMinimum	如果存在 "exclusiveMinimum" 并且具有布尔值 true，如果它严格意义上大于 "minimum" 的值则实例有效。
// maximum	给值设置的约束条件，表示可以接受的最大值。
// exclusiveMaximum	如果存在 "exclusiveMinimum" 并且具有布尔值 true，如果它严格意义上小于 "maximum" 的值则实例有效。
// multipleOf	如果通过这个关键字的值分割实例的结果是一个数字则表示紧靠 "multipleOf" 的数字实例是有效的。
// maxLength	字符串实例字符的最大长度数值。
// minLength	字符串实例字符的最小长度数值。
// pattern	如果正则表达式匹配实例成功则字符串实例被认为是有效的

const _schema: string = "http://json-schema.org/draft-04/schema#";

export namespace ModleProxySchema {
    export abstract class BaseTypeBuilder {
        protected data: JsonSchema;

        constructor() { this.data = {}; }

        build(type: JsonSchemaTypes = "string", title?: string, description?: string): BaseTypeBuilder {
            this.data = _.extend({
                title: title || "",
                description: description || "",
                type: type
            }, this.data || {});

            return this;
        };

        properties(props: { [key: string]: JsonSchema; }): JsonSchemaBuilder {
            this.data = _.extend({
                properties: props,
            }, this.data || {});

            return this;
        }

        items(items: JsonSchema | JsonSchema[]): JsonSchemaBuilder {
            this.data = _.extend({
                items: items,
            }, this.data || {});

            return this;
        }
        schema(schema: string = _schema, id: string = _schema): BaseTypeBuilder {
            this.data = _.extend({
                "$schema": schema,
                id: id
            }, this.data || {});

            return this;
        }

        required(...keys: string[]) {
            this.data = _.extend({
                required: keys
            }, this.data || {});

            return this;
        }

        toValue(): JsonSchema {
            return this.data;
        }
    }


    export class JsonSchemaBuilder extends BaseTypeBuilder {
        constructor() {
            super();
        }

        static init(): JsonSchemaBuilder {
            return new JsonSchemaBuilder();
        }
    }
}