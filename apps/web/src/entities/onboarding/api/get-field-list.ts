import type { GetFieldListResponse } from '@entities/onboarding';
import { END_POINT } from '@entities/onboarding';
import { api } from '@shared/apis/configs/instance';

export const getFieldList = async () => {
  const response = await api
    .get(END_POINT.ONBOARDING.GET_FIELD_LIST)
    .json<GetFieldListResponse>();
  return response.data;
};
