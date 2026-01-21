import { queryOptions } from '@tanstack/react-query';

import { getPhaseList } from '@entities/phase/api';
import { PHASE_QUERY_KEY } from '@entities/phase/queries';

export const PHASE_QUERY_OPTIONS = {
  GET_PHASE_LIST: () => {
    return queryOptions({
      queryKey: PHASE_QUERY_KEY.PHASE_LIST(),
      queryFn: getPhaseList,
    });
  },
};
