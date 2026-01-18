import { lazy } from 'react';

export const DashboardPage = lazy(
  () => import('@pages/dashboard/dashboard-page'),
);
export const RoadmapPage = lazy(() => import('@pages/roadmap/roadmap-page'));
export const FitAnalysisPage = lazy(
  () => import('@pages/fit-analysis/fit-analysis-page'),
);
// export const MyPage = lazy(() => import('@pages/my-page/my-page'));

export const LoginPage = lazy(() => import('@pages/login/login'));
export const LoginCallbackPage = lazy(
  () => import('@pages/login-callback/login-callback-page'),
);

export const OnboardingPage = lazy(
  () => import('@pages/onboarding/onboarding-page'),
);
