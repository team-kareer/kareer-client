import { mutationOptions } from '@tanstack/react-query';

import { addTodoItem, toggleCheckbox } from '@features/todo/api';

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
