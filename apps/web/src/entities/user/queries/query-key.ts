export const USER_QUERY_KEY = {
  ALL: ['user'],
  USER_INFO: () => [...USER_QUERY_KEY.ALL, 'userInfo'],
  USER_STATUS: () => [...USER_QUERY_KEY.ALL, 'status'],
  USER_MY_PAGE: () => [...USER_QUERY_KEY.ALL, 'myPage'],
};
