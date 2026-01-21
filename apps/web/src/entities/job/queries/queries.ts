import { queryOptions } from '@tanstack/react-query';

import { getBookmarkedJob } from '@entities/job/api';
import { BOOKMARKED_JOB_QUERY_KEY } from '@entities/job/queries';

export const BOOKMARKED_JOB_QUERY_OPTIONS = {
  GET_BOOKMARKED_JOB: () => {
    return queryOptions({
      queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      queryFn: getBookmarkedJob,
    });
  },
};
