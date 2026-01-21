import type { components } from '@shared/types/schema';

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
  const todos = {
    visa: sortByCheckedAndDueDate(initialTodos.visa),
    career: sortByCheckedAndDueDate(initialTodos.career),
  };

  return { todos };
};
