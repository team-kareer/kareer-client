import { ROUTE_PATH } from '@shared/router';

/**
 * 애플리케이션 전체 설정을 관리하는 Config 파일
 */
const DEFAULT_CONFIG = {
  auth: {
    isEnabled: true, // 인증 기능 활성화 여부
    loginSuccessUrl: ROUTE_PATH.LOGIN_CALLBACK,
    loginFailureUrl: ROUTE_PATH.LOGIN,
    googleLoginUrl: import.meta.env.VITE_GOOGLE_LOGIN_URL || '',
  },

  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    googleRedirectUrl: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
  },
};

export const appConfig = {
  ...DEFAULT_CONFIG,
};
