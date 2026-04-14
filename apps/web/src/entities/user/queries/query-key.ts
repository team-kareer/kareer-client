import { getLocaleQueryKey } from '@shared/i18n/query-key';

export const USER_QUERY_KEY = {
  ALL: ['user'],
  USER_INFO: () => [...USER_QUERY_KEY.ALL, 'userInfo', getLocaleQueryKey()],
  USER_STATUS: () => [...USER_QUERY_KEY.ALL, 'status', getLocaleQueryKey()],
  USER_COMPLETION: () => [...USER_QUERY_KEY.ALL, 'completion'],
  USER_MY_PAGE: () => [...USER_QUERY_KEY.ALL, 'myPage', getLocaleQueryKey()],
};
