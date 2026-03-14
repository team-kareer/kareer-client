import { END_POINT } from '@features/auth/model/end_point';
import { api } from '@shared/apis/configs/instance';

import { LogOutResponse } from '../model/types';

export const logOut = async () => {
  const response = await api
    .post(END_POINT.LOGOUT.SIGN_OUT)
    .json<LogOutResponse>();

  return response.data;
};
