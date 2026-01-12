import { createBrowserRouter } from 'react-router';

import GlobalLayout from '@shared/router/global-layout';
import { globalRoutes } from '@shared/router/routes/global-routes';
import Onboarding from '@pages/onboarding/onboarding';
import { ROUTE_PATH } from './path';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [...globalRoutes],
  },
  {
    path: ROUTE_PATH.ONBOARDING,
    Component: Onboarding,
  },
]);
