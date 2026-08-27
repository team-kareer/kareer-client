import { mutationOptions } from '@tanstack/react-query';

import {
  addTodoItem,
  createTodoItem,
  deleteTodoItem,
  toggleCheckbox,
  updateTodoItem,
} from '@features/todo/api';

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

  POST_CREATE_TODO: () => {
    return mutationOptions({
      mutationFn: createTodoItem,
    });
  },

  PATCH_UPDATE_TODO: () => {
    return mutationOptions({
      mutationFn: updateTodoItem,
    });
  },

  DELETE_TODO: () => {
    return mutationOptions({
      mutationFn: deleteTodoItem,
    });
  },
};
