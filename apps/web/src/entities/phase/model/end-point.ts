export const END_POINT = {
  PHASE: {
    GET_PHASE_LIST: 'api/v1/roadmap/phases',
    GET_PHASE_ITEM_HOME: (phaseId: number) =>
      `api/v1/roadmap/phases/${phaseId}/home`,
    GET_PHASE_ITEM_ROADMAP: (phaseId: number) =>
      `api/v1/roadmap/phases/${phaseId}`,
    GET_AI_GUIDE: (phaseActionId: number) =>
      `api/v1/roadmap/phase-actions/${phaseActionId}/guide`,
  },
};
