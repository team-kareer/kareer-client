export const USER_STATUS_QUERY_KEY = {
  ALL: ['user'],
  USER_STATUS: () => [...USER_STATUS_QUERY_KEY.ALL, 'status'],
};
