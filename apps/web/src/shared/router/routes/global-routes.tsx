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
      element: <DashboardPage />,
    },
    {
      path: ROUTE_PATH.DASHBOARD,
      element: <DashboardPage />,
    },
    {
      path: ROUTE_PATH.ROADMAP,
      element: <RoadmapPage />,
    },
    {
      path: ROUTE_PATH.ELIGIBILITY,
      element: <EligibilityPage />,
    },
    {
      path: ROUTE_PATH.MY_PAGE,
      element: <MyPage />,
    },
  ];