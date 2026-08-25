import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@kds/ui/styles';
import '@i18n/i18n';

import Page from './page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
