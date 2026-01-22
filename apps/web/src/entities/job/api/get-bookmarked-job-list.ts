import { END_POINT } from '@entities/job';
import { JobPostingListResponse } from '@entities/job';
import { api } from '@shared/apis/configs/instance';

export const getBookmarkedJob = async () => {
  const response = await api
    .get(END_POINT.JOB.GET_BOOKMARKED_JOBS)
    .json<JobPostingListResponse>();

  return response.data;
};
