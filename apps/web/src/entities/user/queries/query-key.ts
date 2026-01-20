export const USER_QUERY_KEY = {
  ALL: ['user'],
  USER_INFO: () => [...USER_QUERY_KEY.ALL, 'userInfo'],
};
