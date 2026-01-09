import { createBrowserRouter } from 'react-router';

import GlobalLayout from '@shared/router/global-layout';
import { globalRoutes } from '@shared/router/routes/global-routes';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [...globalRoutes],
  },
]);
