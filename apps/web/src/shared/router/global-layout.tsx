import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router';

import ErrorPage from '@pages/error/error';
import { AppLayout } from '@widgets/layout';
import { PageLoader } from '@shared/ui';

const GlobalLayout = () => {
  return (
    <AppLayout>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <Sentry.ErrorBoundary
            onReset={reset}
            fallback={({ resetError }) => <ErrorPage onAction={resetError} />}
          >
            <Suspense fallback={<PageLoader text="Please wait a bit..." />}>
              <Outlet />
            </Suspense>
          </Sentry.ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </AppLayout>
  );
};

export default GlobalLayout;
