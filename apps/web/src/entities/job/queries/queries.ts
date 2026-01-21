import { queryOptions } from '@tanstack/react-query';

import { getBookmarkedJob } from '../api/get-bookmarked-job-list';
import { BOOKMARKED_JOB_QUERY_KEY } from './query-key';

export const BOOKMARKED_JOB_QUERY_OPTIONS = {
  GET_BOOKMARKED_JOB: () => {
    return queryOptions({
      queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      queryFn: getBookmarkedJob,
    });
  },
};
