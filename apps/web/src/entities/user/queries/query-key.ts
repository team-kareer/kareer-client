export const USER_QUERY_KEY = {
  ALL: ['user'],
  USER_INFO: () => [...USER_QUERY_KEY.ALL, 'userInfo'],
};
export const USER_STATUS_QUERY_KEY = {
  ALL: ['user'],
  USER_STATUS: () => [...USER_STATUS_QUERY_KEY.ALL, 'status'],
};
