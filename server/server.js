/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";

import { schema } from "./schema";

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      hello: () => "Hello world!",
      age: () => 1122334,
      oldEnough: () => false
    },
    graphiql: true
  })
);
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
  console.log("Now browse to http://localhost:8080" + server.graphqlPath)
);