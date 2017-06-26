"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _schema = "http://json-schema.org/draft-04/schema#";
var ModleProxySchema;
(function (ModleProxySchema) {
    var BaseTypeBuilder = (function () {
        function BaseTypeBuilder() {
            this.data = {};
        }
        BaseTypeBuilder.prototype.build = function (type, title, description) {
            if (type === void 0) { type = "string"; }
            this.data = Object.assign({
                title: title || "",
                description: description || "",
                type: type
            }, this.data || {});
            return this;
        };
        ;
        BaseTypeBuilder.prototype.properties = function (props) {
            this.data = Object.assign({
                properties: props,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.items = function (items) {
            this.data = Object.assign({
                items: items,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.schema = function (schema, id) {
            if (schema === void 0) { schema = _schema; }
            if (id === void 0) { id = _schema; }
            this.data = Object.assign({
                "$schema": schema,
                id: id
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.required = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            this.data = Object.assign({
                required: keys
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.toValue = function () {
            return this.data;
        };
        return BaseTypeBuilder;
    }());
    ModleProxySchema.BaseTypeBuilder = BaseTypeBuilder;
    var JsonSchemaBuilder = (function (_super) {
        __extends(JsonSchemaBuilder, _super);
        function JsonSchemaBuilder() {
            return _super.call(this) || this;
        }
        JsonSchemaBuilder.init = function () {
            return new JsonSchemaBuilder();
        };
        return JsonSchemaBuilder;
    }(BaseTypeBuilder));
    ModleProxySchema.JsonSchemaBuilder = JsonSchemaBuilder;
})(ModleProxySchema = exports.ModleProxySchema || (exports.ModleProxySchema = {}));
//# sourceMappingURL=builder.js.map