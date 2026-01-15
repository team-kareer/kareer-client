import { useState } from 'react';
import { Button, Tab, useTabContext } from '@kds/ui';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';

import * as styles from './todo-panel.css';

type TabKey = 'visa' | 'career';

const TABS = [
  { id: 1, value: 'visa' },
  { id: 2, value: 'career' },
] as const;

const MOCK_TODO = {
  visa: [
    {
      id: 1,
      title: 'visa 투두',
      description: 'Due in 1 days',
      isChecked: false,
    },
    {
      id: 2,
      title: 'Submit OPT Application',
      description: 'Due in 1 days',
      isChecked: true,
    },
    {
      id: 3,
      title: '2 lines gonna be aware like this',
      description: 'Due in 1 days',
      isChecked: false,
    },
    {
      id: 4,
      title: 'Submit OPT Application',
      description: 'Due in 1 days',
      isChecked: false,
    },
  ],
  career: [
    {
      id: 1,
      title: 'career 투두',
      description: 'Due in 1 days',
      isChecked: false,
    },
    {
      id: 2,
      title: 'Submit OPT Application',
      description: 'Due in 1 days',
      isChecked: true,
    },
    {
      id: 3,
      title: 'Submit OPT Application',
      description: 'Due in 1 days',
      isChecked: false,
    },
  ],
};

const TodoPanel = () => {
  const [todos, setTodos] = useState(MOCK_TODO);

  const handleToggle = (tab: TabKey, id: number) => {
    setTodos((prev) => ({
      ...prev,
      [tab]: prev[tab].map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    }));
  };

  return (
    <aside className={styles.container}>
      <h3 className={styles.title}>To Do</h3>
      <Tab.Container initialValue="visa">
        <Tab.List className={styles.tabList}>
          <TodoTabButtons />
        </Tab.List>
        {TABS.map(({ id, value }) => (
          <Tab.Panel key={id} tab={value} className={styles.tabPanel}>
            {todos[value].map(({ id, title, description, isChecked }) => (
              <TodoItem
                key={id}
                title={title}
                description={description}
                size="sm"
                isChecked={isChecked}
                onToggle={() => handleToggle(value, id)}
              />
            ))}
          </Tab.Panel>
        ))}
      </Tab.Container>
    </aside>
  );
};

const TodoTabButtons = () => {
  const { selectedTab, setSelectedTab } = useTabContext();

  return (
    <>
      <Button
        preset={selectedTab === 'visa' ? 'mini_primary' : 'mini_outlined'}
        onClick={() => setSelectedTab('visa')}
      >
        Visa
      </Button>
      <Button
        preset={selectedTab === 'career' ? 'mini_primary' : 'mini_outlined'}
        onClick={() => setSelectedTab('career')}
      >
        Career
      </Button>
    </>
  );
};
export default TodoPanel;
