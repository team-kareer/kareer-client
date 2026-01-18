import { isHttpError } from '@shared/utils/http-error';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';

const RETRY_BLACKLIST = new Set<number>([
  HTTP_STATUS_CODE.BAD_REQUEST,
  HTTP_STATUS_CODE.UNAUTHORIZED,
  HTTP_STATUS_CODE.FORBIDDEN,
  HTTP_STATUS_CODE.NOT_FOUND,
  HTTP_STATUS_CODE.CONFLICT,
]);

const MAX_RETRY_COUNT = 1;
export const shouldRetry = (failureCount: number, error: unknown) => {
  if (failureCount > MAX_RETRY_COUNT) {
    return false;
  }

  if (isHttpError(error) && error.response) {
    const { status } = error.response;

    if (RETRY_BLACKLIST.has(status)) {
      return false;
    }
  }

  return true;
};
