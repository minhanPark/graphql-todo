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
    todo(id: Int!): Todo
    todos: [Todo]
  }
  type Mutation {
    addTodo(title: String!, description: String): Todo
    removeTodo(id: Int!): Todo
  }
`;
