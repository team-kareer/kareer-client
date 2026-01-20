import { Button, Tab, useTabContext } from '@kds/ui';
import { useNavigate } from 'react-router';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';
import { ROUTE_PATH } from '@shared/router/path';
import { EmptyLayout } from '@shared/ui';

import { useSortedTodos } from './hooks/use-sorted-todos';
import { formatDueInDays } from './utils/format-due-in-days';

import * as styles from './todo-panel.css';

const TABS = [
  { id: 1, value: 'visa', label: 'Visa' },
  { id: 2, value: 'career', label: 'Career' },
] as const;

const MOCK_TODO = {
  visa: [],
  career: [
    {
      id: 1,
      title: 'career 투두',
      isChecked: false,
      dueDate: '2026-01-24T00:00:00Z',
    },
    {
      id: 2,
      title: 'Submit OPT Application',
      isChecked: false,
      dueDate: '2026-01-25T00:00:00Z',
    },
  ],
};

const TodoPanel = () => {
  const navigate = useNavigate();
  const { todos, toggleTodo } = useSortedTodos(MOCK_TODO);

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
                currentTodos.map(({ id, title, isChecked, dueDate }) => (
                  <TodoItem
                    key={id}
                    title={title}
                    description={formatDueInDays(dueDate)}
                    size="sm"
                    isChecked={isChecked}
                    onToggle={() => toggleTodo(value, id)}
                  />
                ))
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
