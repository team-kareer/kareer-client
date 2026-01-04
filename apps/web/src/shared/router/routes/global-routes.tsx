import {
    DashboardPage,
    RoadmapPage,
    EligibilityPage,
    MyPage,
  } from '@shared/router/lazy';
  import { ROUTE_PATH } from '@shared/router/path';
  
  export const globalRoutes = [
    {
      path: ROUTE_PATH.ROOT,
      Component: DashboardPage,
    },
    {
      path: ROUTE_PATH.DASHBOARD,
      Component: DashboardPage,
    },
    {
      path: ROUTE_PATH.ROADMAP,
      Component: RoadmapPage,
    },
    {
      path: ROUTE_PATH.ELIGIBILITY,
      Component: EligibilityPage,
    },
    {
      path: ROUTE_PATH.MY_PAGE,
      Component: MyPage,
    },
  ];