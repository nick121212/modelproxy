"use strict";
var builder_1 = require("./builder");
var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JsonSchemaBuilder.init().build("object").properties({
    key: JsonSchemaBuilder.init().build().toValue(),
    title: JsonSchemaBuilder.init().build().toValue(),
    engine: JsonSchemaBuilder.init().build().toValue(),
    states: JsonSchemaBuilder.init().build("object").toValue(),
    state: JsonSchemaBuilder.init().build().toValue(),
    version: JsonSchemaBuilder.init().build().toValue(),
    method: JsonSchemaBuilder.init().build().toValue(),
    path: JsonSchemaBuilder.init().build().toValue(),
    config: JsonSchemaBuilder.init().build("object").toValue(),
    mockDir: JsonSchemaBuilder.init().build().toValue()
}).required("key", "title", "method", "path").toValue();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2ludGVyZmFjZS5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUE2QztBQUVyQyxJQUFBLGdFQUFpQixDQUFzQjs7QUFFL0Msa0JBQWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvRCxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9DLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUMxRCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbkQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2hELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyJ9