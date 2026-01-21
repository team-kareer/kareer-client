import { END_POINT, GetPhaseItemHomeResponse } from '@entities/phase/model';
import { api } from '@shared/apis/configs/instance';

export const getPhaseItemHome = async (phaseId: number) => {
  const response = await api
    .get(END_POINT.PHASE.GET_PHASE_ITEM_HOME(phaseId))
    .json<GetPhaseItemHomeResponse>();

  return response.data;
};
