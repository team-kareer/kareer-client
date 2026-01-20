import { END_POINT } from '@entities/user/model/end_point';
import { GetUserStatusResponse } from '@entities/user/model/types';
import { api } from '@shared/apis/configs/instance';

export const getUserStatus = async () => {
  const response = api
    .get(END_POINT.USER.GET_USER_STATUS)
    .json<GetUserStatusResponse>();

  return response;
};
