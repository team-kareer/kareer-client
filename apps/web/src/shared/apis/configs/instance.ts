import ky, { HTTPError } from '@toss/ky';

import { appConfig } from '@shared/apis/configs/app-config';

import {
  handleCheckAndSetToken,
  handleUnauthorizedResponse,
} from './interceptor';

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
  credentials: 'include',
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
    beforeRequest: [handleCheckAndSetToken],
    afterResponse: [handleUnauthorizedResponse],
  },
});
