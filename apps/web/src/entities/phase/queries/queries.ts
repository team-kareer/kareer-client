import { queryOptions } from '@tanstack/react-query';

import {
  getPhaseItemHome,
  getPhaseItemRoadmap,
  getPhaseList,
} from '@entities/phase/api';
import { getAiGuide } from '@entities/phase/api/get-ai-guide';
import { GetAiGuideRequest } from '@entities/phase/model/types';
import { PHASE_QUERY_KEY } from '@entities/phase/queries';

export const PHASE_QUERY_OPTIONS = {
  GET_PHASE_LIST: () => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.PHASE_LIST(),
      queryFn: getPhaseList,
    });
  },
  GET_PHASE_ITEM_HOME: (phaseId: number) => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.PHASE_ITEM_HOME(phaseId),
      queryFn: () => getPhaseItemHome(phaseId),
      enabled: !!phaseId && phaseId > 0,
    });
  },
  GET_PAHSE_ITEM_ROADMAP: (phaseId: number) => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.PHASE_ITEM_ROADMAP(phaseId),
      queryFn: () => getPhaseItemRoadmap(phaseId),
      enabled: !!phaseId && phaseId > 0,
    });
  },
  GET_AI_GUIDE: ({ phaseActionId }: GetAiGuideRequest) => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.AI_GUIDE(phaseActionId),
      queryFn: () => getAiGuide(phaseActionId),
    });
  },
};
