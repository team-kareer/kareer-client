import { getLocaleQueryKey } from '@shared/i18n/query-key';

export const PHASE_QUERY_KEY = {
  ALL: ['phase'],
  AI_GUIDE: (phaseActionId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'ai-guide',
    phaseActionId,
    getLocaleQueryKey(),
  ],
  PHASE_LIST: () => [...PHASE_QUERY_KEY.ALL, 'phaseList', getLocaleQueryKey()],
  PHASE_ITEM_HOME: (phaseId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'phaseItemHome',
    phaseId,
    getLocaleQueryKey(),
  ],
  PHASE_ITEM_ROADMAP: (phaseId: number) => [
    ...PHASE_QUERY_KEY.ALL,
    'phaseItemRoadmap',
    phaseId,
    getLocaleQueryKey(),
  ],
  PHASE_ITEM_ROADMAP_ALL: () => [
    ...PHASE_QUERY_KEY.ALL,
    'phaseItemRoadmap',
    getLocaleQueryKey(),
  ],
};
