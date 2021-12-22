import "reflect-metadata";
// import "ts-tiny-invariant";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../prisma/generated/types";
import prisma from "../../config/prisma";
import Cors from "micro-cors";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const apolloServer = new ApolloServer({
    context: () => ({ prisma }),
    schema,
    introspection: true,
  });

  const startServer = apolloServer.start();

  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});
