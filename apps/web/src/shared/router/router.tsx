import { createBrowserRouter } from 'react-router';
import { globalRoutes } from '@shared/router/routes/global-routes';
import GlobalLayout from '@shared/router/global-layout';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [...globalRoutes],
  },
]);