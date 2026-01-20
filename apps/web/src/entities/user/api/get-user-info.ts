import { api } from '@shared/apis/configs/instance';

import { END_POINT } from '../model/end_point';
import { GetUserInfoResponse } from '../model/types';

export const getUserInfo = async () => {
  const response = api
    .get(END_POINT.USER.GET_USER_INFO)
    .json<GetUserInfoResponse>();
  return response;
};
