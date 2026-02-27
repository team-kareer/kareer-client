import type { LoaderFunctionArgs } from 'react-router';

export const guestOnlyLoader = (_args: LoaderFunctionArgs) => {};

export const requireAuthLoader = (_args: LoaderFunctionArgs) => {};

export const onboardingGuardLoader = (_args: LoaderFunctionArgs) => {};
