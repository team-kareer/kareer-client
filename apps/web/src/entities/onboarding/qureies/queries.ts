import { queryOptions } from '@tanstack/react-query';

import { getMajorList } from '@entities/onboarding';
import { ONBOARDING_QUERY_KEY, getCountryList } from '@entities/onboarding';

export const MAJOR_LIST_QUERY_OPTIONS = {
  GET_MAJOR_LIST: () => {
    return queryOptions({
      queryKey: ONBOARDING_QUERY_KEY.MAJOR_LIST(),
      queryFn: getMajorList,
    });
  },
};

export const COUNTRY_LIST_QUERY_OPTIONS = {
  GET_COUNTRY_LIST: () => {
    return queryOptions({
      queryKey: ONBOARDING_QUERY_KEY.COUNTRY_LIST(),
      queryFn: getCountryList,
    });
  },
};
