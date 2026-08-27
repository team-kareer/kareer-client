export const END_POINT = {
  TODO: {
    POST_TODO_ITEM: (phaseActionId: number) =>
      `api/v1/roadmap/phase-actions/${phaseActionId}/todo`,
    PATCH_TOGGLE_CHECKBOX: (actionItemId: number) =>
      `api/v1/roadmap/action-items/${actionItemId}/completed`,
    POST_ACTION_ITEM: 'api/v1/roadmap/action-items',
    PATCH_ACTION_ITEM: (actionItemId: number) =>
      `api/v1/roadmap/action-items/${actionItemId}`,
    DELETE_ACTION_ITEM: (actionItemId: number) =>
      `api/v1/roadmap/action-items/${actionItemId}`,
  },
};
