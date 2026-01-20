import { useEffect, useRef, useState } from 'react';

import type { components } from '@shared/types/schema';

type TabKey = 'visa' | 'career';

type Todo = components['schemas']['ActionItemResponse'];

type TodosByTab = {
  visa: Todo[];
  career: Todo[];
};

const sortByCheckedAndDueDate = (list: Todo[]) => {
  const toTime = (value: string) => new Date(value).getTime();

  return [...list].sort((firstTodo, secondTodo) => {
    const checkedDiff =
      Number(firstTodo.completed) - Number(secondTodo.completed);
    if (checkedDiff !== 0) {
      return checkedDiff;
    }

    return toTime(firstTodo.deadline ?? '') - toTime(secondTodo.deadline ?? '');
  });
};

export const useSortedTodos = (initialTodos: TodosByTab) => {
  const [todos, setTodos] = useState(() => ({
    visa: sortByCheckedAndDueDate(initialTodos.visa),
    career: sortByCheckedAndDueDate(initialTodos.career),
  }));

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setTodos({
      visa: sortByCheckedAndDueDate(initialTodos.visa),
      career: sortByCheckedAndDueDate(initialTodos.career),
    });
  }, [initialTodos]);

  const toggleTodo = (tab: TabKey, id: number) => {
    setTodos((prev) => ({
      ...prev,
      [tab]: sortByCheckedAndDueDate(
        prev[tab].map((todo) =>
          todo.actionItemId === id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      ),
    }));
  };

  return { todos, toggleTodo };
};
