import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  daysToDeadline,
  insertItem,
  removeItem,
  type TodoActionsType,
  type TodoDraft,
} from '@features/todo/model';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { type ActionItemList, TODO_QUERY_KEY } from '@entities/todo';

let lastTempId = 0;

const createTempId = () => {
  lastTempId -= 1;

  return lastTempId;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    ...TODO_MUTATION_OPTIONS.POST_CREATE_TODO(),
    onMutate: async (payload) => {
      const queryKey = TODO_QUERY_KEY.TODO_LIST();

      await queryClient.cancelQueries({ queryKey });

      const prev = queryClient.getQueryData<ActionItemList>(queryKey);
      const tempId = createTempId();

      queryClient.setQueryData<ActionItemList>(queryKey, (current) => {
        if (!current) {
          return current;
        }

        return insertItem(
          current,
          {
            actionItemId: tempId,
            title: payload.title,
            deadline: payload.deadline,
            completed: false,
          },
          payload.actionsType,
        );
      });

      return { prev, tempId };
    },
    onSuccess: (item, payload, context) => {
      queryClient.setQueryData<ActionItemList>(
        TODO_QUERY_KEY.TODO_LIST(),
        (current) => {
          if (!current) {
            return current;
          }

          return insertItem(
            removeItem(current, context.tempId),
            item,
            payload.actionsType,
          );
        },
      );
    },
    onError: (_error, _payload, context) => {
      if (context?.prev) {
        queryClient.setQueryData(TODO_QUERY_KEY.TODO_LIST(), context.prev);
      }
    },
  });

  const createTodo = (draft: TodoDraft, actionsType: TodoActionsType) => {
    mutate({
      title: draft.title.trim(),
      deadline: daysToDeadline(draft.dueInDays ?? 0),
      actionsType,
    });
  };

  return { createTodo, isPending };
};
