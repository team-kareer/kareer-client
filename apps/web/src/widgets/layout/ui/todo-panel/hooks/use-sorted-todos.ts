import { useEffect, useRef, useState } from 'react';

type TabKey = 'visa' | 'career';

type Todo = {
  id: number;
  title: string;
  isChecked: boolean;
  dueDate: string;
};

type TodosByTab = {
  visa: Todo[];
  career: Todo[];
};

const sortByCheckedAndDueDate = (list: Todo[]) => {
  const toTime = (value: string) => new Date(value).getTime();

  return [...list].sort((firstTodo, secondTodo) => {
    const checkedDiff =
      Number(firstTodo.isChecked) - Number(secondTodo.isChecked);
    if (checkedDiff !== 0) {
      return checkedDiff;
    }

    return toTime(firstTodo.dueDate) - toTime(secondTodo.dueDate);
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
          todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
        ),
      ),
    }));
  };

  return { todos, toggleTodo };
};
