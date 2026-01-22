export const PHASE_QUERY_KEY = {
  ALL: ['phase'],
  PHASE_LIST: () => [...PHASE_QUERY_KEY.ALL, 'phaseList'],
  PHASE_ITEM_HOME: (phaseId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'phaseItemHome',
    phaseId,
  ],
  PHASE_ITEM_ROADMAP: (phaseId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'phaseItemRoadmap',
    phaseId,
  ],
};
