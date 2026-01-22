import type { PostAiRoadMapResponse } from '@features/onboarding';
import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

export const postAiRoadMap = async (): Promise<PostAiRoadMapResponse> => {
  const response = await api
    .post(END_POINT.ONBOARDING.POST_AI_ROADMAP)
    .json<PostAiRoadMapResponse>();
  return response;
};
