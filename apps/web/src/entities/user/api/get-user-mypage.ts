import { END_POINT, GetUserMyPageResponse } from '@entities/user/model';
import { api } from '@shared/apis/configs/instance';

export const getUserMyPage = async () => {
  const response = await api
    .get(END_POINT.USER.GET_MY_PAGE_INFO)
    .json<GetUserMyPageResponse>();
  return response.data;
};
