import {
  END_POINT,
  PatchUpdateTodoBody,
  PatchUpdateTodoRequest,
  PatchUpdateTodoResponse,
  TodoItemResponseData,
} from '@features/todo/model';
import { api } from '@shared/apis/configs/instance';

import { unwrapActionItem } from './unwrap-action-item';

export const updateTodoItem = async ({
  actionItemId,
  title,
  deadline,
}: PatchUpdateTodoRequest): Promise<TodoItemResponseData> => {
  const body: PatchUpdateTodoBody = { title, deadline };

  const response = await api
    .patch(END_POINT.TODO.PATCH_ACTION_ITEM(actionItemId), { json: body })
    .json<PatchUpdateTodoResponse>();

  return unwrapActionItem(response.data);
};
