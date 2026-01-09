import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { Outlet } from 'react-router';

import AppLayout from '@widgets/layout/components/app-layout/app-layout';

const GlobalLayout = () => {
  return (
    <AppLayout>
      <Sentry.ErrorBoundary>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Sentry.ErrorBoundary>
    </AppLayout>
  );
};

export default GlobalLayout;
