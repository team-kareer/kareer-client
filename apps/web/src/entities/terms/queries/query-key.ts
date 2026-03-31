export const TERMS_QUERY_KEY = {
  ALL: ['terms'],
  TERMS_LIST: () => [...TERMS_QUERY_KEY.ALL, 'termsList'],
};
