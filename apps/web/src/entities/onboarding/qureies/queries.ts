import { queryOptions } from '@tanstack/react-query';

import {
  getCountryList,
  getFieldList,
  getMajorList,
  getUniversityList,
  ONBOARDING_QUERY_KEY,
} from '@entities/onboarding';

export const FIELD_LIST_QUERY_OPTIONS = {
  GET_FIELD_LIST: () => {
    return queryOptions({
      queryKey: ONBOARDING_QUERY_KEY.FIELD_LIST(),
      queryFn: getFieldList,
    });
  },
};

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

export const UNIVERSITY_LIST_QUERY_OPTIONS = {
  GET_UNIVERSITY_LIST: () => {
    return queryOptions({
      queryKey: ONBOARDING_QUERY_KEY.UNIVERSITY_LIST(),
      queryFn: getUniversityList,
    });
  },
};
