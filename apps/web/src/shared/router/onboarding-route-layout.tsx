import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { Outlet } from 'react-router';

import ErrorPage from '@pages/error/error';
import { OnboardingLayout } from '@widgets/layout';

const OnboardingRouteLayout = () => {
  return (
    <OnboardingLayout>
      <Sentry.ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Sentry.ErrorBoundary>
    </OnboardingLayout>
  );
};

export default OnboardingRouteLayout;
