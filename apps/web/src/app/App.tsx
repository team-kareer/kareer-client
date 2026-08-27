import { ToastProvider } from '@kds/ui';
import { RouterProvider } from 'react-router';

import { QueryProvider } from '@shared/apis/providers';
import { TODO_PANEL_ANCHOR } from '@shared/constants/TODO_PANEL_ANCHOR';
import { router } from '@shared/router';

import '@kds/ui/styles';

function App() {
  return (
    <QueryProvider>
      <ToastProvider anchor={TODO_PANEL_ANCHOR}>
        <RouterProvider router={router} />
      </ToastProvider>
    </QueryProvider>
  );
}

export default App;
