import { END_POINT, GetPhaseItemRoadmapResponse } from '@entities/phase/model';
import { api } from '@shared/apis/configs/instance';

export const getPhaseItemRoadmap = async (phaseId: number) => {
  const response = await api
    .get(END_POINT.PHASE.GET_PHASE_ITEM_ROADMAP(phaseId))
    .json<GetPhaseItemRoadmapResponse>();

  return response.data;
};
