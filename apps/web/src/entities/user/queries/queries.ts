import { queryOptions } from '@tanstack/react-query';

import { getUserInfo } from '../api/get-user-info';
import { USER_QUERY_KEY } from './query-key';

export const USER_QUERY_OPTIONS = {
  GET_USER_INFO: () => {
    return queryOptions({
      queryKey: USER_QUERY_KEY.USER_INFO(),
      queryFn: getUserInfo,
    });
  },
};
