import { mutationOptions } from '@tanstack/react-query';

import { addTodoItem } from '@features/todo/api/add-todo-item';
import { toggleCheckbox } from '@features/todo/api/toggle-checkbox';

export const TODO_MUTATION_OPTIONS = {
  POST_TODO: () => {
    return mutationOptions({
      mutationFn: addTodoItem,
    });
  },

  PATCH_TODO: () => {
    return mutationOptions({
      mutationFn: toggleCheckbox,
    });
  },
};
