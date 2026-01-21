import { queryOptions } from '@tanstack/react-query';

import { getUserInfo, getUserStatus } from '@entities/user/api';
import { USER_QUERY_KEY } from '@entities/user/queries';

export const USER_QUERY_OPTIONS = {
  GET_USER_INFO: () => {
    return queryOptions({
      queryKey: USER_QUERY_KEY.USER_INFO(),
      queryFn: getUserInfo,
    });
  },
  GET_USER_STATUS: () => {
    return queryOptions({
      queryKey: USER_QUERY_KEY.USER_STATUS(),
      queryFn: getUserStatus,
    });
  },
};
