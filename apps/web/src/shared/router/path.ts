export const ROUTE_PATH = {
  DASHBOARD: '/',
  ROADMAP: '/roadmap',
  FITANALYSIS: '/fit-analysis',
  // MY_PAGE: '/my-page',

  ERROR: '/error-page',
  LOGIN: '/login',
  LOGIN_CALLBACK: '/oauth/callback',
  ONBOARDING: '/onboarding',
};

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
