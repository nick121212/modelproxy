import { Controller, UseBefore, Get } from "routing-controllers";
import { injectable } from "inversify";
import { graphiqlExpress } from 'apollo-server-express';

/**
 * graphiql
 * app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
 */
@injectable()
@Controller("/graphiql")
@UseBefore(graphiqlExpress({ endpointURL: '/graphql' }))
export class ProjectController {
    @Get("/")
    p() {

    }
}