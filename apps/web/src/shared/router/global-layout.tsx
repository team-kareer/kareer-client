import { Suspense } from 'react';
import * as Sentry from '@sentry/react';
import { Outlet } from 'react-router';

const GlobalLayout = () => {
  return (
    <main>
      <Sentry.ErrorBoundary>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Sentry.ErrorBoundary>
    </main>
  );
};

export default GlobalLayout;
