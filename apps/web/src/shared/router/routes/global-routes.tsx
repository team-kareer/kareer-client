import ErrorPage from '@pages/error/error';
import {
  DashboardPage,
  FitAnalysisPage,
  LoginCallbackPage,
  // MyPage,
  RoadmapPage,
} from '@shared/router/lazy';
import { ROUTE_PATH } from '@shared/router/path';

export const publicRoutes = [
  {
    path: ROUTE_PATH.LOGIN_CALLBACK,
    Component: LoginCallbackPage,
  },
];

export const protectedAppRoutes = [
  {
    path: ROUTE_PATH.DASHBOARD,
    Component: DashboardPage,
  },
  {
    path: ROUTE_PATH.ROADMAP,
    Component: RoadmapPage,
  },
  {
    path: ROUTE_PATH.FITANALYSIS,
    Component: FitAnalysisPage,
  },
  {
    path: '*',
    element: <ErrorPage isNotFound={true} />,
  },
  // {
  //   path: ROUTE_PATH.MY_PAGE,
  //   Component: MyPage,
  // },
];
