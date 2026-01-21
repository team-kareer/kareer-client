export const END_POINT = {
  TODO: {
    POST_TODO_ITEM: (phaseActionId: number) =>
      `api/v1/phase-actions/${phaseActionId}/todo`,
    PATCH_TOGGLE_CHECKBOX: (actionItemId: number) =>
      `api/v1/action-items/${actionItemId}/completed`,
  },
};
