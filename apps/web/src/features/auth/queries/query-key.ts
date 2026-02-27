export const AUTH_QUERY_KEY = {
  ALL: ['auth'],
  LOGIN_STATE: () => [...AUTH_QUERY_KEY.ALL, 'loginState'],
};
