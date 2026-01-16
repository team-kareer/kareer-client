import type { Options } from 'ky';

import { authService } from '@shared/auth/auth-service';
import { tokenService } from '@shared/auth/token-service';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';

export const handleCheckAndSetToken = (request: Request) => {
  const token = tokenService.getAccessToken();
  if (token) {
    request.headers.set('Authorization', `Bearer ${token}`);
  }
};

export const handleUnauthorizedResponse = async (
  _request: Request,
  _options: Options,
  response: Response,
): Promise<Response> => {
  if (response.status !== HTTP_STATUS_CODE.UNAUTHORIZED) {
    return response;
  }

  authService.logout();
  return response;
};
