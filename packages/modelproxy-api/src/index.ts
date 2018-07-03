import "reflect-metadata";
import path from "path";
import { Application } from "express";
import { createExpressServer, useContainer } from "routing-controllers";
import { createConnection, Connection } from "typeorm";
import config from "config";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import { container } from "./container";

const pwd: string = path.resolve(__dirname);

/**
 * 载入DI
 */
useContainer(container);

/**
 * 创建app
 */
const app: Application = createExpressServer({
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

(async () => {
})

/**
 * 链接mysql然后启动服务
 */
createConnection().then(async (_conn: Connection) => {
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

    // 启动应用
    app.listen(config.get("site.port") || 3004, config.get("site.host") || "0.0.0.0", () => {
        console.log("server listen on 3004");
    });
}).catch(error => console.log(error));
