"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const apollo_server_express_1 = require("apollo-server-express");
/**
 * graphiql
 * app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
 */
let ProjectController = class ProjectController {
    p() {
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "p", null);
ProjectController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.Controller("/graphiql"),
    routing_controllers_1.UseBefore(apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }))
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=graphiql.js.map