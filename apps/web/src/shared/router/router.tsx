import { createBrowserRouter } from 'react-router';

import { ROUTE_PATH } from '@shared/router';
import GlobalLayout from '@shared/router/global-layout';
import { LoginPage, OnboardingPage } from '@shared/router/lazy';
import { guestOnlyLoader, requiredAuthLoader } from '@shared/router/loader';
import OnboardingRouteLayout from '@shared/router/onboarding-route-layout';
import {
  protectedAppRoutes,
  publicRoutes,
} from '@shared/router/routes/global-routes';

export const router = createBrowserRouter([
  ...publicRoutes,
  {
    Component: OnboardingRouteLayout,
    children: [
      {
        path: ROUTE_PATH.LOGIN,
        loader: guestOnlyLoader,
        Component: LoginPage,
      },
      {
        path: ROUTE_PATH.ONBOARDING,
        loader: requiredAuthLoader,
        Component: OnboardingPage,
      },
    ],
  },
  {
    Component: GlobalLayout,
    loader: requiredAuthLoader,
    children: protectedAppRoutes,
  },
]);
