import { END_POINT } from '@entities/job/model/end_point';
import {
  RecommendJobPostingsParams,
  RecommendJobPostingsResponse,
} from '@entities/job/model/types';
import { api } from '@shared/apis/configs/instance';

export const recommendJobPostings = async (
  params: RecommendJobPostingsParams,
): Promise<RecommendJobPostingsResponse> => {
  const formData = new FormData();
  params.files.forEach((file) => {
    formData.append('files', file);
  });

  return api
    .post(END_POINT.JOB.POST_JOB_RECOMMEND, { body: formData })
    .json<RecommendJobPostingsResponse>();
};
