import {
  END_POINT,
  PatchToggleCHeckboxResponse,
  PatchToggleCheckboxRequest,
} from '@features/todo/model';
import { api } from '@shared/apis/configs/instance';

export const toggleCheckbox = async (
  actionItemId: PatchToggleCheckboxRequest,
): Promise<PatchToggleCHeckboxResponse> => {
  return api
    .patch(END_POINT.TODO.PATCH_TOGGLE_CHECKBOX(actionItemId))
    .json<PatchToggleCHeckboxResponse>();
};
