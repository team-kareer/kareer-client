import { type LoaderFunctionArgs, redirect } from 'react-router';

import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { queryClient } from '@shared/apis/providers/query-client';
import { authService } from '@shared/auth/auth-service';
import { ROUTE_PATH } from '@shared/router';

export const requireAuth = () => {
  if (!authService.isAuthenticated()) {
    throw redirect(ROUTE_PATH.LOGIN);
  }
  return null;
};

export const guestOnlyLoader = ({ request }: LoaderFunctionArgs) => {
  if (authService.isAuthenticated()) {
    const from = new URL(request.url).searchParams.get('from');
    throw redirect(from ?? ROUTE_PATH.DASHBOARD);
  }
  return null;
};

export const appRouteLoader = async () => {
  requireAuth();

  const userCompletion = await queryClient.ensureQueryData(
    USER_QUERY_OPTIONS.GET_USER_COMPLETION(),
  );

  if (!userCompletion) {
    return;
  }

  if (!userCompletion.agreeTerm) {
    throw redirect(ROUTE_PATH.TERMSAGREEMENT);
  }

  if (userCompletion.onboardingRequired) {
    throw redirect(ROUTE_PATH.ONBOARDING);
  }

  return null;
};

export const termsGuardLoader = async () => {
  requireAuth();

  const userCompletion = await queryClient.ensureQueryData(
    USER_QUERY_OPTIONS.GET_USER_COMPLETION(),
  );

  if (!userCompletion) {
    return;
  }

  const redirectUrl = userCompletion.onboardingRequired
    ? ROUTE_PATH.ONBOARDING
    : ROUTE_PATH.DASHBOARD;

  if (userCompletion.agreeTerm) {
    throw redirect(redirectUrl);
  }

  return null;
};

export const onboardingGuardLoader = async () => {
  requireAuth();

  const userCompletion = await queryClient.ensureQueryData(
    USER_QUERY_OPTIONS.GET_USER_COMPLETION(),
  );

  if (!userCompletion) {
    return;
  }

  if (!userCompletion.agreeTerm) {
    throw redirect(ROUTE_PATH.TERMSAGREEMENT);
  }

  if (!userCompletion.onboardingRequired) {
    throw redirect(ROUTE_PATH.DASHBOARD);
  }

  return null;
};
