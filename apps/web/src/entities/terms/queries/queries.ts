import { queryOptions } from '@tanstack/react-query';

import { getTermsList } from '@entities/terms/api';
import { TERMS_QUERY_KEY } from '@entities/terms/queries';

export const TERMS_QUERY_OPTIONS = {
  GET_TERMS_LIST: () => {
    return queryOptions({
      queryKey: TERMS_QUERY_KEY.TERMS_LIST(),
      queryFn: getTermsList,
    });
  },
};
