import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { InitAnalytics } from '@shared/configs/analytics';
import InitSentry from '@shared/configs/sentry';

import '@shared/i18n/i18n';

import App from './App';

InitSentry();
InitAnalytics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
