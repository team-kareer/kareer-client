import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router';

import ErrorPage from '@pages/error/error';
import { OnboardingLayout } from '@widgets/layout';
import { PageLoader } from '@shared/ui';

const OnboardingRouteLayout = () => {
  return (
    <OnboardingLayout>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <Sentry.ErrorBoundary
            onReset={reset}
            fallback={({ resetError }) => <ErrorPage onAction={resetError} />}
          >
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </Sentry.ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </OnboardingLayout>
  );
};

export default OnboardingRouteLayout;
