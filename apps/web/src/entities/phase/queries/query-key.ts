export const PHASE_QUERY_KEY = {
  ALL: ['phase'],
  AI_GUIDE: (phaseActionId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'ai-guide',
    phaseActionId,
  ],
};
