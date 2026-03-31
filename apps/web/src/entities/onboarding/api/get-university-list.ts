import { END_POINT } from '@entities/onboarding';
import { api } from '@shared/apis/configs/instance';

import { GetUniversityListResponse } from '../model/types';

export const getUniversityList = async () => {
  const response = await api
    .get(END_POINT.ONBOARDING.GET_UNIVERSITY_LIST)
    .json<GetUniversityListResponse>();
  return response.data;
};
