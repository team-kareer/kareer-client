import { createBrowserRouter } from 'react-router';

import GlobalLayout from '@shared/router/global-layout';
import OnboardingRouteLayout from '@shared/router/onboarding-route-layout';
import { globalRoutes } from '@shared/router/routes/global-routes';
import { onboardingRoutes } from '@shared/router/routes/onboarding-routes';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [...globalRoutes],
  },
  {
    Component: OnboardingRouteLayout,
    children: [...onboardingRoutes],
  },
]);
