import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { Outlet } from 'react-router';

import ErrorPage from '@pages/error/error';
import { AppLayout } from '@widgets/layout';

const GlobalLayout = () => {
  return (
    <AppLayout>
      <Sentry.ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Sentry.ErrorBoundary>
    </AppLayout>
  );
};

export default GlobalLayout;
