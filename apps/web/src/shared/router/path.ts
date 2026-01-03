export const ROUTE_PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  ROADMAP: '/roadmap',
  ELIGIBILITY: '/eligibility',
  MY_PAGE: '/my-page',
};

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];