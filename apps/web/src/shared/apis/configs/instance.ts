import ky from '@toss/ky';

import { appConfig } from '@shared/apis/configs/app-config';
import { isHttpError } from '@shared/utils/http-error';

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

type KyCreateOptions = Parameters<typeof ky.create>[0];
type KyHooks = NonNullable<KyCreateOptions['hooks']>;
type BeforeErrorHook = NonNullable<KyHooks['beforeError']>[number];

const beforeErrorHook: BeforeErrorHook = (error) => {
  if (isHttpError(error)) {
    error.name = buildSentryErrorName(error.request, error.response?.status);
  }
  return error;
};

export const api: ReturnType<typeof ky.create> = ky.create({
  prefixUrl: appConfig.api.baseUrl,
  credentials: 'include',
  retry: 0,
  hooks: {
    beforeError: [beforeErrorHook],
    beforeRequest: [handleCheckAndSetToken],
    afterResponse: [handleUnauthorizedResponse],
  },
});
