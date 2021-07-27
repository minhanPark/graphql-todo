import client from "../client";

export default {
  Query: {
    todo: () => client.todo.findUnique({ where: { id: 1 } }),
    todos: () => [],
  },
};
