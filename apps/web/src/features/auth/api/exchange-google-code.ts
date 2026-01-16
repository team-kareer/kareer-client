import { END_POINT } from '@features/auth/model/end_point';
import { api } from '@shared/apis/configs/instance';

export interface GoogleLoginResponse {
  code: number;
  message: string;
  data: {
    accessToken: string;
    onboardingRequired: boolean;
  };
}

export const exchangeGoogleCode = (code: string) =>
  api
    .post(END_POINT.LOGIN.EXCHANGE_GOOGLE_CODE, {
      json: { code },
    })
    .json<GoogleLoginResponse>();
