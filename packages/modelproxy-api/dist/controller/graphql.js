"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const graphql_tools_1 = require("graphql-tools");
const apollo_server_express_1 = require("apollo-server-express");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
// Some fake data
const books = [{
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    }, {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    }];
// The GraphQL schema in string form
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;
// The resolvers
const resolvers = {
    Query: { books: (_withAuthor) => books },
};
// Put together a schema
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
/**
 * graphql
 */
let ProjectController = class ProjectController {
    index() {
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "index", null);
ProjectController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.Controller("/graphql"),
    routing_controllers_1.UseBefore(body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema }))
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=graphql.js.map