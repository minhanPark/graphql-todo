import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql``;

const resolvers = {
  Query: {},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url}`);
});
