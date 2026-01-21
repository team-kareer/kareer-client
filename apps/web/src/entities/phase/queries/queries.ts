import { queryOptions } from '@tanstack/react-query';

import { getAiGuide } from '@entities/phase/api/get-ai-guide';
import { GetAiGuideRequest } from '@entities/phase/model/types';
import { PHASE_QUERY_KEY } from '@entities/phase/queries/query-key';

export const PHASE_OPTIONS = {
  GET_AI_GUIDE: ({ phaseActionId }: GetAiGuideRequest) => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.AI_GUIDE(phaseActionId),
      queryFn: () => getAiGuide(phaseActionId),
    });
  },
};
