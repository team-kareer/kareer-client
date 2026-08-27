import type { ActionItem } from '@entities/todo';

type TodosByTab = {
  visa: ActionItem[];
  career: ActionItem[];
};

type SortedTodos = {
  incomplete: ActionItem[];
  completed: ActionItem[];
};

const toTime = (deadline: string | undefined): number | null => {
  if (!deadline) {
    return null;
  }

  const time = new Date(deadline).getTime();

  if (Number.isNaN(time)) {
    return null;
  }

  return time;
};

const sortByDueDate = (list: ActionItem[]) =>
  [...list].sort(
    (firstTodo, secondTodo) =>
      (toTime(firstTodo.deadline) ?? 0) - (toTime(secondTodo.deadline) ?? 0),
  );

const splitByCompleted = (list: ActionItem[]): SortedTodos => ({
  incomplete: sortByDueDate(list.filter((todo) => !todo.completed)),
  completed: sortByDueDate(list.filter((todo) => todo.completed)),
});

export const getSortedTodos = (todosByTab: TodosByTab) => ({
  visa: splitByCompleted(todosByTab.visa),
  career: splitByCompleted(todosByTab.career),
});
