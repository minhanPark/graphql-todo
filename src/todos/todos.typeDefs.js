import { gql } from "apollo-server";

export default gql`
  type Todo {
    id: Int!
    title: String!
    description: String
    isCompleted: Boolean!
    createdAt: String
    updatedAt: String
  }
  type Query {
    todo: Todo
    todos: [Todo]
  }
`;
