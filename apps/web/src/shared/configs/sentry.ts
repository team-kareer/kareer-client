import * as Sentry from '@sentry/react';

import { HTTP_STATUS_CODE } from '@shared/constants/HTTP_STATUS_CODE';

const IGNORED_STATUS_ERRORS = [
  HTTP_STATUS_CODE.BAD_REQUEST,
  HTTP_STATUS_CODE.UNAUTHORIZED,
  HTTP_STATUS_CODE.NOT_FOUND,
  HTTP_STATUS_CODE.NO_CONTENT,
].map(String);

const InitSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    enabled: import.meta.env.PROD,
    sendDefaultPii: false,
    ignoreErrors: IGNORED_STATUS_ERRORS,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};

export default InitSentry;
