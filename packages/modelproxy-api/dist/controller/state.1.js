"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typegql_1 = require("typegql");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
// import { makeExecutableSchema } from 'graphql-tools';
const express_graphql_1 = tslib_1.__importDefault(require("express-graphql"));
let SuperSchema = class SuperSchema {
    hello(name) {
        return `Hello, ${name}!`;
    }
};
tslib_1.__decorate([
    typegql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", String)
], SuperSchema.prototype, "hello", null);
SuperSchema = tslib_1.__decorate([
    typegql_1.SchemaRoot()
], SuperSchema);
let State = class State {
};
State = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.UseBefore(routing_controllers_1.Controller("/ql/state"), express_graphql_1.default({
        schema: typegql_1.compileSchema({ roots: [SuperSchema] }),
        graphiql: true,
    }))
], State);
exports.State = State;
//# sourceMappingURL=state.1.js.map