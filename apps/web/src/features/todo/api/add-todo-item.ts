import {
  END_POINT,
  PostAddTodoItemRequest,
  PostAddTodoItemResponse,
} from '@features/todo/model';
import { api } from '@shared/apis/configs/instance';

export const addTodoItem = async (
  phaseActionId: PostAddTodoItemRequest,
): Promise<PostAddTodoItemResponse> => {
  return api
    .post(END_POINT.TODO.POST_TODO_ITEM(phaseActionId))
    .json<PostAddTodoItemResponse>();
};
