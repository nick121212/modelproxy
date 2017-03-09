"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZ0JBLElBQU0sT0FBTyxHQUFXLHlDQUF5QyxDQUFDO0FBRWxFLElBQWlCLGdCQUFnQixDQStEaEM7QUEvREQsV0FBaUIsZ0JBQWdCO0lBQzdCO1FBR0k7WUFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFBQyxDQUFDO1FBRWpDLCtCQUFLLEdBQUwsVUFBTSxJQUF1QixFQUFFLEtBQWMsRUFBRSxXQUFvQjtZQUE3RCxxQkFBQSxFQUFBLGVBQXVCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdEIsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNsQixXQUFXLEVBQUUsV0FBVyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxJQUFJO2FBQ2IsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLENBQUM7UUFFRixvQ0FBVSxHQUFWLFVBQVcsS0FBeUM7WUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixVQUFVLEVBQUUsS0FBSzthQUNwQixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsK0JBQUssR0FBTCxVQUFNLEtBQXdDO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdEIsS0FBSyxFQUFFLEtBQUs7YUFDZixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsZ0NBQU0sR0FBTixVQUFPLE1BQXdCLEVBQUUsRUFBb0I7WUFBOUMsdUJBQUEsRUFBQSxnQkFBd0I7WUFBRSxtQkFBQSxFQUFBLFlBQW9CO1lBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdEIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFO2FBQ1QsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELGtDQUFRLEdBQVI7WUFBUyxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdEIsUUFBUSxFQUFFLElBQUk7YUFDakIsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELGlDQUFPLEdBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQUFDLEFBbERELElBa0RDO0lBbERxQixnQ0FBZSxrQkFrRHBDLENBQUE7SUFHRDtRQUF1QyxxQ0FBZTtRQUNsRDttQkFDSSxpQkFBTztRQUNYLENBQUM7UUFFTSxzQkFBSSxHQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQUFDLEFBUkQsQ0FBdUMsZUFBZSxHQVFyRDtJQVJZLGtDQUFpQixvQkFRN0IsQ0FBQTtBQUNMLENBQUMsRUEvRGdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBK0RoQyJ9