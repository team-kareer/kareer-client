import { type LoaderFunctionArgs, redirect } from 'react-router';

import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { queryClient } from '@shared/apis/providers/query-client';
import { authService } from '@shared/auth/auth-service';
import { ROUTE_PATH } from '@shared/router';

export const guestOnlyLoader = ({ request }: LoaderFunctionArgs) => {
  if (authService.isAuthenticated()) {
    const from = new URL(request.url).searchParams.get('from');
    throw redirect(from ?? ROUTE_PATH.DASHBOARD);
  }
  return null;
};

export const requireAuthLoader = () => {
  if (!authService.isAuthenticated()) {
    throw redirect(ROUTE_PATH.LOGIN);
  }
  return null;
};

export const onboardingGuardLoader = async () => {
  requireAuthLoader();

  const userStatus = await queryClient.ensureQueryData(
    USER_QUERY_OPTIONS.GET_USER_STATUS(),
  );

  if (userStatus.onboardingRequired === false) {
    throw redirect(ROUTE_PATH.DASHBOARD);
  }

  return null;
};
