import { END_POINT, GetUserStatusResponse } from '@entities/user/model';
import { api } from '@shared/apis/configs/instance';

export const getUserStatus = async () => {
  const response = await api
    .get(END_POINT.USER.GET_USER_STATUS)
    .json<GetUserStatusResponse>();

  return response.data;
};
