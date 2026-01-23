import { END_POINT } from '@entities/phase/model/end_point';
import { GetAIGuideResponse } from '@entities/phase/model/types';
import { api } from '@shared/apis/configs/instance';

export const getAiGuide = async (phaseActionId: number) => {
  const response = await api
    .get(END_POINT.PHASE.GET_AI_GUIDE(phaseActionId))
    .json<GetAIGuideResponse>();

  return response.data;
};
