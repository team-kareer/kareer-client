import { END_POINT, GetTermsListResponse } from '@entities/terms';
import { api } from '@shared/apis/configs/instance';

export const getTermsList = async () => {
  const response = await api
    .get(END_POINT.TERMS.GET_TERMS_LIST)
    .json<GetTermsListResponse>();

  return response.data;
};
