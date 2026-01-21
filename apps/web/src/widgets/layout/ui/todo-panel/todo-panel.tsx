import { Button, Tab, useTabContext } from '@kds/ui';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { TODO_QUERY_KEY } from '@entities/todo';
import { TODO_QUERY_OPTIONS } from '@entities/todo/queries/queries';
import TodoItem from '@entities/todo/ui/todo-item/todo-item';
import { ROUTE_PATH } from '@shared/router/path';
import type { components } from '@shared/types/schema';
import { EmptyLayout } from '@shared/ui';

import { useSortedTodos } from './hooks/use-sorted-todos';
import { formatDueInDays } from './utils/format-due-in-days';

import * as styles from './todo-panel.css';

const TABS = [
  { id: 1, value: 'visa', label: 'Visa' },
  { id: 2, value: 'career', label: 'Career' },
] as const;

type ActionItemListResponse = components['schemas']['ActionItemListResponse'];

const toggleCompleted = (
  items: ActionItemListResponse['visaActionItems'],
  actionItemId: number,
) =>
  items?.map((item) =>
    item.actionItemId === actionItemId
      ? { ...item, completed: !item.completed }
      : item,
  );

const TodoPanel = () => {
  const navigate = useNavigate();
  const { data } = useQuery({ ...TODO_QUERY_OPTIONS.GET_TODO_LIST() });
  const { todos } = useSortedTodos({
    visa: data?.visaActionItems ?? [],
    career: data?.careerActionItems ?? [],
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...TODO_MUTATION_OPTIONS.PATCH_TODO(),
    onMutate: async (actionItemId) => {
      const queryKey = TODO_QUERY_KEY.TODO_LIST();

      await queryClient.cancelQueries({ queryKey });

      const prev = queryClient.getQueryData<ActionItemListResponse>(queryKey);

      queryClient.setQueryData<ActionItemListResponse>(queryKey, (current) => {
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
      const queryKey = TODO_QUERY_KEY.TODO_LIST();

      if (context?.prev) {
        queryClient.setQueryData(queryKey, context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY.TODO_LIST() });
    },
  });

  const handleAddTodo = () => {
    navigate(ROUTE_PATH.ROADMAP);
  };

  return (
    <aside className={styles.container}>
      <h3 className={styles.title}>To-Do</h3>
      <Tab.Container initialValue="visa">
        <Tab.List className={styles.tabList}>
          <TodoTabButtons />
        </Tab.List>
        {TABS.map(({ id, value }) => {
          const currentTodos = todos[value];
          const isEmpty = currentTodos.length === 0;

          return (
            <Tab.Panel key={id} tab={value} className={styles.tabPanel}>
              {isEmpty ? (
                <EmptyLayout variant="card" onAction={handleAddTodo} />
              ) : (
                currentTodos.map(
                  ({ actionItemId, title, completed, deadline }) => (
                    <TodoItem
                      key={actionItemId}
                      title={title ?? ''}
                      description={formatDueInDays(deadline ?? '')}
                      size="sm"
                      isChecked={completed ?? false}
                      onToggle={() => {
                        mutate(Number(actionItemId));
                      }}
                    />
                  ),
                )
              )}
            </Tab.Panel>
          );
        })}
      </Tab.Container>
    </aside>
  );
};

const TodoTabButtons = () => {
  const { selectedTab, setSelectedTab } = useTabContext();

  return (
    <>
      {TABS.map(({ id, value, label }) => (
        <Button
          key={id}
          preset={selectedTab === value ? 'mini_primary' : 'mini_outlined'}
          onClick={() => setSelectedTab(value)}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
export default TodoPanel;
