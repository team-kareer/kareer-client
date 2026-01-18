import { END_POINT } from '@features/auth/model/end_point';
import { GoogleLoginResponse } from '@features/auth/model/types';
import { api } from '@shared/apis/configs/instance';

export const exchangeGoogleCode = async (code: string) => {
  const response = await api
    .post(END_POINT.LOGIN.EXCHANGE_GOOGLE_CODE, {
      json: { code },
    })
    .json<GoogleLoginResponse>();

  return response.data;
};
