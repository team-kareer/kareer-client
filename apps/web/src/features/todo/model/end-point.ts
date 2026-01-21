export const END_POINT = {
  TODO: {
    POST_TODO_ITEM: (phaseActionId: number) =>
      `api/v1/phase-actions/${phaseActionId}/todo`,
    PATCH_TOGGLE_CHECKBOX: (actionItemId: number) =>
      `pai/v1/phase-action/${actionItemId}/todo`,
  },
};
