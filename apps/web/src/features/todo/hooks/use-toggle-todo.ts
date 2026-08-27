import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { PHASE_QUERY_KEY } from '@entities/phase/queries';
import { type ActionItemList, TODO_QUERY_OPTIONS } from '@entities/todo';

const toggleCompleted = (
  items: ActionItemList['visaActionItems'],
  actionItemId: number,
) =>
  items?.map((item) =>
    item.actionItemId === actionItemId
      ? { ...item, completed: !item.completed }
      : item,
  );

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  const { queryKey } = TODO_QUERY_OPTIONS.GET_TODO_LIST();
  const pendingActionItemIds = useRef(new Set<number>());

  const { mutate } = useMutation({
    ...TODO_MUTATION_OPTIONS.PATCH_TODO(),
    onMutate: async (actionItemId) => {
      pendingActionItemIds.current.add(actionItemId);

      await queryClient.cancelQueries({ queryKey });

      const prev = queryClient.getQueryData<ActionItemList>(queryKey);

      queryClient.setQueryData<ActionItemList>(queryKey, (current) => {
        if (!current) {
          return current;
        }

        return {
          ...current,
          visaActionItems: toggleCompleted(
            current.visaActionItems,
            actionItemId,
          ),
          careerActionItems: toggleCompleted(
            current.careerActionItems,
            actionItemId,
          ),
        };
      });

      return { prev };
    },
    onError: (_error, _variables, context) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKey, context.prev);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PHASE_QUERY_KEY.PHASE_ITEM_ROADMAP_ALL(),
      });
    },
    onSettled: (_data, _error, actionItemId) => {
      pendingActionItemIds.current.delete(actionItemId);
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const toggleTodo = (actionItemId: number) => {
    if (pendingActionItemIds.current.has(actionItemId)) {
      return;
    }

    mutate(actionItemId);
  };

  return { toggleTodo };
};
