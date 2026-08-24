import type { ActionItem } from '@entities/todo';

type TodosByTab = {
  visa: ActionItem[];
  career: ActionItem[];
};

type SortedTodos = {
  incomplete: ActionItem[];
  completed: ActionItem[];
};

const sortByDueDate = (list: ActionItem[]) => {
  const toTime = (value: string) => new Date(value).getTime();

  return [...list].sort(
    (firstTodo, secondTodo) =>
      toTime(firstTodo.deadline ?? '') - toTime(secondTodo.deadline ?? ''),
  );
};

const splitByCompleted = (list: ActionItem[]): SortedTodos => ({
  incomplete: sortByDueDate(list.filter((todo) => !todo.completed)),
  completed: sortByDueDate(list.filter((todo) => todo.completed)),
});

export const useSortedTodos = (initialTodos: TodosByTab) => {
  const todos = {
    visa: splitByCompleted(initialTodos.visa),
    career: splitByCompleted(initialTodos.career),
  };

  return { todos };
};
