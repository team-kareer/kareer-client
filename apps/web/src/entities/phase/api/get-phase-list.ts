import { END_POINT, GetPhaseListResponse } from '@entities/phase/model';
import { api } from '@shared/apis/configs/instance';

export const getPhaseList = async () => {
  const response: GetPhaseListResponse = await api
    .get(END_POINT.PHASE.GET_PHASE_LIST)
    .json();

  return response.data;
};
