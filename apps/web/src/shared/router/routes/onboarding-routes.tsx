import { LoginPage, OnboardingPage } from '@shared/router/lazy';
import { ROUTE_PATH } from '@shared/router/path';

export const onboardingRoutes = [
  {
    path: ROUTE_PATH.LOGIN,
    Component: LoginPage,
  },
  {
    path: ROUTE_PATH.ONBOARDING,
    Component: OnboardingPage,
  },
];
