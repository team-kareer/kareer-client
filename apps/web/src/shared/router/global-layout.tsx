import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const GlobalLayout = () => {
  return (
    <div>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default GlobalLayout;
