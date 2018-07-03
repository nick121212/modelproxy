"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const path_1 = tslib_1.__importDefault(require("path"));
const routing_controllers_1 = require("routing-controllers");
const typeorm_1 = require("typeorm");
const config_1 = tslib_1.__importDefault(require("config"));
// import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
// import { makeExecutableSchema } from "graphql-tools";
const container_1 = require("./container");
const pwd = path_1.default.resolve(__dirname);
/**
 * 载入DI
 */
routing_controllers_1.useContainer(container_1.container);
// const a: AsyncIterator;
/**
 * 创建app
 */
const app = routing_controllers_1.createExpressServer({
    cors: true,
    defaultErrorHandler: true,
    defaults: {
        nullResultCode: 200,
        undefinedResultCode: 204,
        paramOptions: {
            required: true
        }
    },
    controllers: [`${pwd}/controller/*.js`],
    middlewares: [`${pwd}/middleware/*.js`],
    interceptors: [`${pwd}/interceptor/*.js`]
});
(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
}));
/**
 * 链接mysql然后启动服务
 */
typeorm_1.createConnection().then((_conn) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
    // 启动应用
    app.listen(config_1.default.get("site.port") || 3004, config_1.default.get("site.host") || "0.0.0.0", () => {
        console.log("server listen on 3004");
    });
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map