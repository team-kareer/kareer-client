import {
  END_POINT,
  PostCreateTodoBody,
  PostCreateTodoRequest,
  PostCreateTodoResponse,
  TodoItemResponseData,
} from '@features/todo/model';
import { api } from '@shared/apis/configs/instance';

import { unwrapActionItem } from './unwrap-action-item';

export const createTodoItem = async ({
  actionsType,
  ...rest
}: PostCreateTodoRequest): Promise<TodoItemResponseData> => {
  const body: PostCreateTodoBody = { ...rest, type: actionsType };

  const response = await api
    .post(END_POINT.TODO.POST_ACTION_ITEM, { json: body })
    .json<PostCreateTodoResponse>();

  return unwrapActionItem(response.data);
};
