import { END_POINT, GetUserInfoResponse } from '@entities/user/model';
import { api } from '@shared/apis/configs/instance';

export const getUserInfo = async () => {
  const response = await api
    .get(END_POINT.USER.GET_USER_INFO)
    .json<GetUserInfoResponse>();
  return response.data;
};
