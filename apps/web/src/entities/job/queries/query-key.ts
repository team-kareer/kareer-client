import { getLocaleQueryKey } from '@shared/i18n/query-key';

export const BOOKMARKED_JOB_QUERY_KEY = {
  ALL: ['bookmarked-job'],
  BOOKMARKED_JOB: () => [
    ...BOOKMARKED_JOB_QUERY_KEY.ALL,
    'list',
    getLocaleQueryKey(),
  ],
};
