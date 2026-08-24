import { type ReactNode, useEffect, useRef } from 'react';
import { useToast } from '@kds/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { deleteTodoItem } from '@features/todo/api';
import { removeItem } from '@features/todo/model';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { type ActionItemList, TODO_QUERY_KEY } from '@entities/todo';

interface UseDeleteTodoParams {
  onHide: (actionItemId: number) => void;
  onReveal: (actionItemId: number) => void;
  renderUndoAction: (onUndo: () => void) => ReactNode;
}

export const useDeleteTodo = ({
  onHide,
  onReveal,
  renderUndoAction,
}: UseDeleteTodoParams) => {
  const { t } = useTranslation('todo');
  const { showToast, hideToast } = useToast();
  const queryClient = useQueryClient();
  const pendingDeletesRef = useRef(new Map<number, string>());

  const { mutate } = useMutation({
    ...TODO_MUTATION_OPTIONS.DELETE_TODO(),
    onMutate: async ({ actionItemId }) => {
      const queryKey = TODO_QUERY_KEY.TODO_LIST();

      await queryClient.cancelQueries({ queryKey });

      const prev = queryClient.getQueryData<ActionItemList>(queryKey);

      queryClient.setQueryData<ActionItemList>(queryKey, (current) => {
        if (!current) {
          return current;
        }

        return removeItem(current, actionItemId);
      });

      return { prev };
    },
    onSuccess: (_data, { actionItemId }) => {
      onReveal(actionItemId);
    },
    onError: (_error, { actionItemId }, context) => {
      if (context?.prev) {
        queryClient.setQueryData(TODO_QUERY_KEY.TODO_LIST(), context.prev);
      }

      onReveal(actionItemId);
    },
  });
  const commitDelete = (actionItemId: number) => {
    if (!pendingDeletesRef.current.delete(actionItemId)) {
      return;
    }

    mutate({ actionItemId });
  };

  const cancelDelete = (actionItemId: number) => {
    const toastId = pendingDeletesRef.current.get(actionItemId);

    if (!toastId) {
      return;
    }

    pendingDeletesRef.current.delete(actionItemId);
    hideToast(toastId);
    onReveal(actionItemId);
  };

  const requestDelete = (actionItemId: number) => {
    if (pendingDeletesRef.current.has(actionItemId)) {
      return;
    }

    onHide(actionItemId);

    const toastId = showToast({
      message: t('toast.deleted', { count: 1 }),
      action: renderUndoAction(() => cancelDelete(actionItemId)),
      onAutoDismiss: () => commitDelete(actionItemId),
    });

    pendingDeletesRef.current.set(actionItemId, toastId);
  };

  useEffect(() => {
    const pendingDeletes = pendingDeletesRef.current;

    return () => {
      pendingDeletes.forEach((_toastId, actionItemId) => {
        deleteTodoItem({ actionItemId }).catch(() => undefined);
      });

      pendingDeletes.clear();
    };
  }, []);

  return { requestDelete };
};
