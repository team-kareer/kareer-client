import { LoginPage, OnboardingPage } from '@shared/router/lazy';
import { ROUTE_PATH } from '@shared/router/path';

export const publicOnboardingRoutes = [
  {
    path: ROUTE_PATH.LOGIN,
    Component: LoginPage,
  },
];

export const protectedOnboardingRoutes = [
  {
    path: ROUTE_PATH.ONBOARDING,
    Component: OnboardingPage,
  },
];
