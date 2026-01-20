import { Navigate, Outlet } from 'react-router';

import { authService } from '@shared/auth/auth-service';
import { ROUTE_PATH } from '@shared/router/path';

const ProtectedRoute = () => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
