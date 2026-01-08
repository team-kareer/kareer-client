import { RouterProvider } from 'react-router';

import { QueryProvider } from '@shared/apis/providers';
import { router } from '@shared/router';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
