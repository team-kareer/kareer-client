import { END_POINT } from '@entities/onboarding';
import type { GetMajorListResponse } from '@entities/onboarding';
import { api } from '@shared/apis/configs/instance';

export const getMajorList = async () => {
  const response = await api
    .get(END_POINT.ONBOARDING.GET_MAJOR_LIST)
    .json<GetMajorListResponse>();
  return response.data;
};
