import { END_POINT } from '@features/todo/model/end-point';
import {
  PostAddTodoItemRequest,
  PostAddTodoItemResponse,
} from '@features/todo/model/types';
import { api } from '@shared/apis/configs/instance';

export const addTodoItem = async (
  phaseActionId: PostAddTodoItemRequest,
): Promise<PostAddTodoItemResponse> => {
  return api
    .post(END_POINT.TODO.POST_TODO_ITEM(phaseActionId))
    .json<PostAddTodoItemResponse>();
};
