import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  daysToDeadline,
  type TodoDraft,
  updateItem,
} from '@features/todo/model';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { type ActionItemList, TODO_QUERY_OPTIONS } from '@entities/todo';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { queryKey } = TODO_QUERY_OPTIONS.GET_TODO_LIST();

  const { mutate, isPending } = useMutation({
    ...TODO_MUTATION_OPTIONS.PATCH_UPDATE_TODO(),
    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey });

      const prev = queryClient.getQueryData<ActionItemList>(queryKey);

      queryClient.setQueryData<ActionItemList>(queryKey, (current) => {
        if (!current) {
          return current;
        }

        return updateItem(current, {
          actionItemId: payload.actionItemId,
          title: payload.title,
          deadline: payload.deadline,
        });
      });

      return { prev };
    },
    onSuccess: (item) => {
      queryClient.setQueryData<ActionItemList>(queryKey, (current) => {
        if (!current) {
          return current;
        }

        return updateItem(current, item);
      });
    },
    onError: (_error, _payload, context) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKey, context.prev);
      }
    },
  });

  const updateTodo = (actionItemId: number, draft: TodoDraft) => {
    mutate({
      actionItemId,
      title: draft.title.trim(),
      deadline: daysToDeadline(draft.dueInDays ?? 0),
    });
  };

  return { updateTodo, isPending };
};
