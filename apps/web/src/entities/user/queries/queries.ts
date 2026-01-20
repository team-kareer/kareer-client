import { queryOptions } from '@tanstack/react-query';

import { getUserStatus } from '@entities/user/api/get-user-status';

import { USER_STATUS_QUERY_KEY } from './query-key';

export const USER_STATUS_QUERY_OPTIONS = {
  GET_USER_STATUS: () => {
    return queryOptions({
      queryKey: USER_STATUS_QUERY_KEY.USER_STATUS(),
      queryFn: getUserStatus,
    });
  },
};
