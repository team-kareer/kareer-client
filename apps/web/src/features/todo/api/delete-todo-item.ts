import { DeleteTodoRequest, END_POINT } from '@features/todo/model';
import { api } from '@shared/apis/configs/instance';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';
import { isHttpError } from '@shared/utils/http-error';

export const deleteTodoItem = async ({
  actionItemId,
}: DeleteTodoRequest): Promise<void> => {
  try {
    await api.delete(END_POINT.TODO.DELETE_ACTION_ITEM(actionItemId));
  } catch (error) {
    if (
      isHttpError(error) &&
      error.response?.status === HTTP_STATUS_CODE.NOT_FOUND
    ) {
      return;
    }

    throw error;
  }
};
