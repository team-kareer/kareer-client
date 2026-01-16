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
    .post('api/v1/auth/code/exchange', {
      json: { code },
    })
    .json<GoogleLoginResponse>();
