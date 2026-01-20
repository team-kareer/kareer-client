import { mutationOptions } from '@tanstack/react-query';

import { addTodoItem } from '@features/todo/api/add-todo-item';

export const TODO_MUTATION_OPTIONS = {
  POST_TODO: () => {
    return mutationOptions({
      mutationFn: addTodoItem,
    });
  },
};
