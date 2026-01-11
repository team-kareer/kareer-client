import FitAnalysisPage from '@pages/fit-analysis/fit-analysis-page';
import { DashboardPage, MyPage, RoadmapPage } from '@shared/router/lazy';
import { ROUTE_PATH } from '@shared/router/path';

export const globalRoutes = [
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
    path: ROUTE_PATH.MY_PAGE,
    Component: MyPage,
  },
];
