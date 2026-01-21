import { END_POINT } from '@features/todo/model/end-point';
import {
  PatchToggleCheckboxRequest,
  PatchToggleCHeckboxResponse,
} from '@features/todo/model/types';
import { api } from '@shared/apis/configs/instance';

export const toggleCheckbox = async (
  actionItemId: PatchToggleCheckboxRequest,
): Promise<PatchToggleCHeckboxResponse> => {
  return api
    .patch(END_POINT.TODO.PATCH_TOGGLE_CHECKBOX(actionItemId))
    .json<PatchToggleCHeckboxResponse>();
};
