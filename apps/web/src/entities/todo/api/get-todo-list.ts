import { END_POINT } from '@entities/todo/model/end_point';
import { GetTodoListResponse } from '@entities/todo/model/types';
import { api } from '@shared/apis/configs/instance';

export const getTodoList = async () => {
  const response = api
    .get(END_POINT.TODO.GET_TODO_ITEMS)
    .json<GetTodoListResponse>();

  return response;
};
