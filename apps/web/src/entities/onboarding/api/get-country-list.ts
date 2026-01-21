import type { GetCountryListResponse } from '@entities/onboarding';
import { END_POINT } from '@entities/onboarding';
import { api } from '@shared/apis/configs/instance';

export const getCountryList = async () => {
  const response = await api
    .get(END_POINT.ONBOARDING.GET_COUNTRY_LIST)
    .json<GetCountryListResponse>();
  return response.data;
};
