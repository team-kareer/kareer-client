export const BOOKMARKED_JOB_QUERY_KEY = {
  ALL: ['bookmarked-job'],
  BOOKMARKED_JOB: () => [...BOOKMARKED_JOB_QUERY_KEY.ALL, 'list'],
};
