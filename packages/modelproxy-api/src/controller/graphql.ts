import { Controller, UseBefore, Post } from "routing-controllers";
import { injectable } from "inversify";
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress } from 'apollo-server-express';
import bodyParse from "body-parser";


const books = [{
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
}, {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
}];

const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;

const resolvers = {
    Query: { books: (_withAuthor: boolean) => books },
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

/**
 * graphql
 */
@injectable()
@Controller("/graphql")
@UseBefore(bodyParse.json(), graphqlExpress({ schema }))
export class ProjectController {
    @Post("/")
    index() {
    }
}