import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    book: Book
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    book: () => ({ title: "Graphql Book", author: "RunningWaterMinHan!!" }),
    books: () => [],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url}`);
});
