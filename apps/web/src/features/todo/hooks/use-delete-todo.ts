import { type ReactNode, useEffect, useRef } from 'react';
import { TOAST_DURATION, useToast } from '@kds/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { deleteTodoItem } from '@features/todo/api';
import { removeItem } from '@features/todo/model';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { type ActionItemList, TODO_QUERY_KEY } from '@entities/todo';

const DELETE_GRACE_MS = TOAST_DURATION;

interface PendingDelete {
  timeoutId: number;
  toastId: string;
}

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
  const pendingDeletesRef = useRef(new Map<number, PendingDelete>());

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

  const cancelDelete = (actionItemId: number) => {
    const pendingDelete = pendingDeletesRef.current.get(actionItemId);

    if (!pendingDelete) {
      return;
    }

    window.clearTimeout(pendingDelete.timeoutId);
    pendingDeletesRef.current.delete(actionItemId);
    hideToast(pendingDelete.toastId);
    onReveal(actionItemId);
  };

  const requestDelete = (actionItemId: number) => {
    if (pendingDeletesRef.current.has(actionItemId)) {
      return;
    }

    onHide(actionItemId);

    const timeoutId = window.setTimeout(() => {
      pendingDeletesRef.current.delete(actionItemId);
      mutate({ actionItemId });
    }, DELETE_GRACE_MS);

    const toastId = showToast({
      message: t('toast.deleted', { count: 1 }),
      action: renderUndoAction(() => cancelDelete(actionItemId)),
    });

    pendingDeletesRef.current.set(actionItemId, { timeoutId, toastId });
  };

  useEffect(() => {
    const pendingDeletes = pendingDeletesRef.current;

    return () => {
      pendingDeletes.forEach(({ timeoutId }, actionItemId) => {
        window.clearTimeout(timeoutId);
        deleteTodoItem({ actionItemId }).catch(() => undefined);
      });

      pendingDeletes.clear();
    };
  }, []);

  return { requestDelete };
};
