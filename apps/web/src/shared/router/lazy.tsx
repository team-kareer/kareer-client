import { lazy } from 'react';

export const DashboardPage = lazy(() => import('@pages/dashboard/dashboard-page'));
export const RoadmapPage = lazy(() => import('@pages/roadmap/roadmap-page'));
export const EligibilityPage = lazy(() => import('@pages/eligibility/eligibility-page'));
export const MyPage = lazy(() => import('@pages/my-page/my-page'));