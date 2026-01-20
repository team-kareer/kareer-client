import { queryOptions } from '@tanstack/react-query';

import { getTodoList } from '@entities/todo/api/get-todo-list';
import { TODO_QUERY_KEY } from '@entities/todo/queries/query-key';

export const TODO_QUERY_OPTIONS = {
  GET_TODO_LIST: () => {
    return queryOptions({
      queryKey: TODO_QUERY_KEY.TODO_LIST(),
      queryFn: getTodoList,
    });
  },
};
