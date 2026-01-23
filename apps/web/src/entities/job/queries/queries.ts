import { mutationOptions, queryOptions } from '@tanstack/react-query';

import { toggleBookmarkJobPosting } from '@entities/job';
import { recommendJobPostings } from '@entities/job';
import { BOOKMARKED_JOB_QUERY_KEY } from '@entities/job';
import { getBookmarkedJob } from '@entities/job/api';

export const JOB_MUTATION_OPTIONS = {
  RECOMMEND_JOB_POSTINGS: () => {
    return mutationOptions({
      mutationFn: recommendJobPostings,
    });
  },
  TOGGLE_BOOKMARK_JOB_POSTING: () => {
    return mutationOptions({
      mutationFn: toggleBookmarkJobPosting,
    });
  },
};

export const JOB_MUTATION_OPTIONS = {
  RECOMMEND_JOB_POSTINGS: () => {
    return mutationOptions({
      mutationFn: recommendJobPostings,
    });
  },
  TOGGLE_BOOKMARK_JOB_POSTING: () => {
    return mutationOptions({
      mutationFn: toggleBookmarkJobPosting,
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
