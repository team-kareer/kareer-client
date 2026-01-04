export const ROUTE_PATH = {
  DASHBOARD: '/',
  ROADMAP: '/roadmap',
  ELIGIBILITY: '/eligibility',
  MY_PAGE: '/my-page',
};

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];