import { END_POINT } from '@features/auth/model/end_point';
import { LogOutResponse } from '@features/auth/model/types';
import { api } from '@shared/apis/configs/instance';

export const logOut = async (): Promise<LogOutResponse> => {
  return api.post(END_POINT.LOGOUT.SIGN_OUT).json<LogOutResponse>();
};
