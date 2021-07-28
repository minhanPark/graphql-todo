import client from "../client";

export default {
  Query: {
    todo: (_, { id }) => client.todo.findUnique({ where: { id } }),
    todos: () => client.todo.findMany(),
  },
  Mutation: {
    addTodo: (_, { title, description }) =>
      client.todo.create({
        data: {
          title,
          description,
        },
      }),
    removeTodo: (_, { id }) => client.todo.delete({ where: { id } }),
  },
};
