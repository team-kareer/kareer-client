import { type LoaderFunctionArgs, redirect } from 'react-router';

import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { queryClient } from '@shared/apis/providers/query-client';
import { authService } from '@shared/auth/auth-service';
import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';
import { ROUTE_PATH } from '@shared/router';
import { isHttpError } from '@shared/utils/http-error';

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

  try {
    const userStatus = await queryClient.ensureQueryData(
      USER_QUERY_OPTIONS.GET_USER_STATUS(),
    );

    if (!userStatus) {
      return;
    }

    if (!userStatus.agreedTerm) {
      throw redirect(ROUTE_PATH.TERMSAGREEMENT);
    }

    if (userStatus.onboardingRequired) {
      throw redirect(ROUTE_PATH.ONBOARDING);
    }
  } catch (error) {
    if (
      isHttpError(error) &&
      error.response?.status === HTTP_STATUS_CODE.FORBIDDEN
    ) {
      throw redirect(ROUTE_PATH.ONBOARDING);
    }

    throw error;
  }

  return null;
};

export const termsGuardLoader = async () => {
  requireAuth();

  try {
    const userStatus = await queryClient.ensureQueryData(
      USER_QUERY_OPTIONS.GET_USER_STATUS(),
    );

    if (!userStatus) {
      return;
    }

    if (!userStatus.agreedTerm) {
      return null;
    }

    const redirectUrl = userStatus.onboardingRequired
      ? ROUTE_PATH.ONBOARDING
      : ROUTE_PATH.DASHBOARD;

    if (userStatus.agreedTerm) {
      throw redirect(redirectUrl);
    }
  } catch (error) {
    if (
      isHttpError(error) &&
      error.response?.status === HTTP_STATUS_CODE.FORBIDDEN
    ) {
      throw redirect(ROUTE_PATH.ONBOARDING);
    }

    throw error;
  }

  return null;
};

export const onboardingGuardLoader = async () => {
  requireAuth();

  try {
    const userStatus = await queryClient.ensureQueryData(
      USER_QUERY_OPTIONS.GET_USER_STATUS(),
    );

    if (!userStatus) {
      return;
    }

    if (userStatus.onboardingRequired === false) {
      throw redirect(ROUTE_PATH.DASHBOARD);
    }
  } catch (error) {
    if (
      isHttpError(error) &&
      error.response?.status === HTTP_STATUS_CODE.FORBIDDEN
    ) {
      return null;
    }

    throw error;
  }

  return null;
};
