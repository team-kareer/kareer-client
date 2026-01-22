import { mutationOptions } from '@tanstack/react-query';
import { queryOptions } from '@tanstack/react-query';

import { getBookmarkedJob } from '@entities/job/api';
import { recommendJobPostings } from '@entities/job/api/recommended-job-posting';
import { BOOKMARKED_JOB_QUERY_KEY } from '@entities/job/queries';

export const JOB_MUTATION_OPTIONS = {
  RECOMMEND_JOB_POSTINGS: () => {
    return mutationOptions({
      mutationFn: recommendJobPostings,
    });
  },
};

export const BOOKMARKED_JOB_QUERY_OPTIONS = {
  GET_BOOKMARKED_JOB: () => {
    return queryOptions({
      queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      queryFn: getBookmarkedJob,
    });
  },
};
