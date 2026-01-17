import type { Options } from 'ky';

import { appConfig } from '@shared/apis/configs/app-config';
import { api } from '@shared/apis/configs/instance';
import { authService } from '@shared/auth/auth-service';
import { tokenService } from '@shared/auth/token-service';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';
import { ROUTE_PATH } from '@shared/router';

/**
 * 토큰 재발급을 위한 API 엔드포인트 URL입니다.
 */
const REFRESH_ENDPOINT = 'api/v1/auth/reissue';
const AUTH_EXCHANGE_ENDPOINT = 'api/v1/auth/code/exchange';

type RetryOptions = Options & {
  kareerAuthRetry?: boolean;
};

const isAuthExchangeRequest = (url: string) =>
  url.includes(AUTH_EXCHANGE_ENDPOINT);

const isRefreshRequest = (url: string) => url.includes(REFRESH_ENDPOINT);

interface ReissueResponse {
  data: {
    accessToken: string;
  };
}

/**
 * 요청 전에 accessToken을 Authorization 헤더에 설정합니다.
 *
 * @param request - 전송할 요청 객체
 */
export const handleCheckAndSetToken = (request: Request) => {
  const requestUrl = request.url;
  const accessToken = tokenService.getAccessToken();

  if (isRefreshRequest(requestUrl) || isAuthExchangeRequest(requestUrl)) {
    return;
  }

  if (accessToken) {
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }
};

/**
 * 인증 실패 시 로그아웃 처리 후 로그인 페이지로 리다이렉트합니다.
 *
 * - 저장된 인증 정보를 제거합니다.
 * - '/login' 페이지로 이동합니다.
 */
const redirectToLogin = () => {
  authService.logout();
  window.location.replace(ROUTE_PATH.LOGIN);
};

const rejectToLogin = () => {
  redirectToLogin();
  return Promise.reject();
};

/**
 * 인증 실패(401 Unauthorized) 응답 시 토큰 재발급을 시도합니다.
 *
 * 동작 방식:
 * - 응답이 401이 아닌 경우 → 원래 응답을 그대로 반환합니다.
 * - 재발급 대상이 아닌 요청은 로그인 페이지로 리다이렉트합니다.
 * - 재발급 API에 요청을 보냅니다.
 * - 성공 시 새 토큰을 저장하고 원래 요청을 재시도합니다.
 * - 실패 시 로그인 페이지로 이동합니다.
 *
 * @param request - 실패했던 원래 요청 객체
 * @param options - 요청에 사용된 fetch 옵션
 * @param response - 서버로부터 받은 응답 객체
 *
 * @returns 새로 갱신된 토큰으로 재시도한 응답 또는 리다이렉트 후 중단
 *
 * @throws 인증 실패 또는 네트워크 오류 등으로 리다이렉트가 발생한 경우 예외를 던집니다.
 */
export const handleUnauthorizedResponse = async (
  request: Request,
  options: Options,
  response: Response,
) => {
  const requestUrl = request.url;
  const { kareerAuthRetry } = options as RetryOptions;

  if (response.status !== HTTP_STATUS_CODE.UNAUTHORIZED) {
    return response;
  }

  if (isAuthExchangeRequest(requestUrl)) {
    return response;
  }

  if (isRefreshRequest(requestUrl) || kareerAuthRetry) {
    return rejectToLogin();
  }

  try {
    const refreshUrl = new URL(REFRESH_ENDPOINT, appConfig.api.baseUrl);
    const refreshResponse = await fetch(refreshUrl, {
      method: 'POST',
      credentials: 'include',
    });

    if (!refreshResponse.ok) {
      return rejectToLogin();
    }

    const refreshData: ReissueResponse = await refreshResponse.json();

    tokenService.saveAccessToken(refreshData.data.accessToken);

    const retryHeaders = new Headers(request.headers);
    retryHeaders.set('Authorization', `Bearer ${refreshData.data.accessToken}`);

    const nextOptions: RetryOptions = {
      ...options,
      headers: retryHeaders,
      kareerAuthRetry: true,
    };

    return api(request, nextOptions);
  } catch {
    return rejectToLogin();
  }
};
