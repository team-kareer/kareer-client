import { queryOptions } from '@tanstack/react-query';

import { getUserStatus } from '@entities/user/api/get-user-status';

import { getUserInfo } from '../api/get-user-info';
import { USER_QUERY_KEY } from './query-key';
import { USER_STATUS_QUERY_KEY } from './query-key';

export const USER_QUERY_OPTIONS = {
  GET_USER_INFO: () => {
    return queryOptions({
      queryKey: USER_QUERY_KEY.USER_INFO(),
      queryFn: getUserInfo,
    });
  },
};

export const USER_STATUS_QUERY_OPTIONS = {
  GET_USER_STATUS: () => {
    return queryOptions({
      queryKey: USER_STATUS_QUERY_KEY.USER_STATUS(),
      queryFn: getUserStatus,
    });
  },
};
