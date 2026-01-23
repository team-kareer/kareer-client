import {
  END_POINT,
  RecommendJobPostingsParams,
  RecommendJobPostingsResponse,
} from '@entities/job';
import { api } from '@shared/apis/configs/instance';

export const recommendJobPostings = async (
  params: RecommendJobPostingsParams,
): Promise<RecommendJobPostingsResponse> => {
  const formData = new FormData();
  params.files?.forEach((file) => formData.append('files', file));

  return api
    .post(END_POINT.JOB.POST_JOB_RECOMMEND, {
      searchParams: {
        includeCompletedTodo: params.includeCompletedTodo ?? false,
      },
      body: formData,
      duplex: 'half',
      timeout: false,
    })
    .json<RecommendJobPostingsResponse>();
};
