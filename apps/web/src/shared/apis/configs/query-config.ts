import { HTTPError } from 'ky';

import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';

const RETRY_BLACKLIST = new Set<number>([
  HTTP_STATUS_CODE.BAD_REQUEST,
  HTTP_STATUS_CODE.UNAUTHORIZED,
  HTTP_STATUS_CODE.FORBIDDEN,
  HTTP_STATUS_CODE.NOT_FOUND,
  HTTP_STATUS_CODE.CONFLICT,
]);

export const shouldRetry = (failureCount: number, error: unknown) => {
  if (failureCount > 1) {
    return false;
  }

  if (error instanceof HTTPError) {
    const { status } = error.response;

    if (RETRY_BLACKLIST.has(status)) {
      return false;
    }
  }

  return true;
};
