import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import InitSentry from '@shared/configs/sentry';

import '@shared/i18n/i18n';

import App from './App';

InitSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
