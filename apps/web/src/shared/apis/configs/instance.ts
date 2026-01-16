import ky, { HTTPError } from 'ky';

import { appConfig } from '@shared/apis/configs/app-config';
import { authService } from '@shared/auth/auth-service';
import { tokenService } from '@shared/auth/token-service';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';

const normalizePathParams = (path: string) =>
  path.replace(/\/\d+(?=\/|$)/g, '/{id}');

const buildSentryErrorName = (request: Request, status?: number) => {
  const url = new URL(request.url, window.location.origin);
  const normalizedPath = normalizePathParams(url.pathname);
  const statusLabel = status ?? 'Network';

  return `[${statusLabel} Error] - ${url.origin}${normalizedPath}`;
};

export const api = ky.create({
  prefixUrl: appConfig.api.baseUrl,
  retry: 0,
  hooks: {
    beforeError: [
      (error) => {
        if (error instanceof HTTPError) {
          error.name = buildSentryErrorName(
            error.request,
            error.response?.status,
          );
        }
        return error;
      },
    ],
    beforeRequest: [
      (request: Request) => {
        const token = tokenService.getAccessToken();
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
          authService.logout();
        }
      },
    ],
  },
});
