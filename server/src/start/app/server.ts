import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../../typeDefs";
import { resolvers } from "../../resolvers";

export const createServer = (options?: any) =>
  new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res }),
    ...options
  });
