import { Suspense } from 'react';
import { Outlet } from 'react-router';

const GlobalLayout = () => {
  return (
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
  );
};

export default GlobalLayout;
