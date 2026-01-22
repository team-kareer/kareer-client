export const END_POINT = {
  PHASE: {
    GET_PHASE_LIST: 'api/v1/phases',
    GET_PHASE_ITEM_HOME: (phaseId: number) => `api/v1/phases/${phaseId}/home`,
    GET_PHASE_ITEM_ROADMAP: (phaseId: number) =>
      `api/v1/phases/${phaseId}/roadmap`,
  },
};
