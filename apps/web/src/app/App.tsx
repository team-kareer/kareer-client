import { ToastProvider } from '@kds/ui';
import { RouterProvider } from 'react-router';

import { QueryProvider } from '@shared/apis/providers';
import { router } from '@shared/router';

import '@kds/ui/styles';

function App() {
  return (
    <QueryProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </QueryProvider>
  );
}

export default App;
