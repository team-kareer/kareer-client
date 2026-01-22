import { createBrowserRouter } from 'react-router';

import GlobalLayout from '@shared/router/global-layout';
import OnboardingRouteLayout from '@shared/router/onboarding-route-layout';
import ProtectedRoute from '@shared/router/protected-route';
import PublicOnlyRoute from '@shared/router/public-only-route';
import {
  protectedAppRoutes,
  publicRoutes,
} from '@shared/router/routes/global-routes';
import {
  protectedOnboardingRoutes,
  publicOnboardingRoutes,
} from '@shared/router/routes/onboarding-routes';

export const router = createBrowserRouter([
  ...publicRoutes,
  {
    Component: GlobalLayout,
    children: [
      {
        Component: ProtectedRoute,
        children: protectedAppRoutes,
      },
    ],
  },
  {
    Component: OnboardingRouteLayout,
    children: [
      {
        Component: PublicOnlyRoute,
        children: publicOnboardingRoutes,
      },
      {
        Component: ProtectedRoute,
        children: protectedOnboardingRoutes,
      },
    ],
  },
]);
