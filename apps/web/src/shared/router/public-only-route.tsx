import { Navigate, Outlet, useLocation } from 'react-router';

import { authService } from '@shared/auth/auth-service';
import { ROUTE_PATH } from '@shared/router/path';

const PublicOnlyRoute = () => {
  const isAuthenticated = authService.isAuthenticated();
  const location = useLocation();

  if (isAuthenticated) {
    const from = location.state?.from;
    return <Navigate to={from ?? ROUTE_PATH.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default PublicOnlyRoute;
