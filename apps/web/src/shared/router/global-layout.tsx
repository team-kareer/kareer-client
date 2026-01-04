import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
