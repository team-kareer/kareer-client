import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@shared/i18n/i18n';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
