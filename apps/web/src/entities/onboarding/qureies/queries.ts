import { queryOptions } from '@tanstack/react-query';

import { getMajorList } from '@entities/onboarding';
import { ONBOARDING_QUERY_KEY } from '@entities/onboarding';

export const MAJOR_LIST_QUERY_OPTIONS = {
  GET_MAJOR_LIST: () => {
    return queryOptions({
      queryKey: ONBOARDING_QUERY_KEY.MAJOR_LIST(),
      queryFn: getMajorList,
    });
  },
};
