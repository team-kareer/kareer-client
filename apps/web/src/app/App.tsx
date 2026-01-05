import { RouterProvider } from 'react-router';

import { router } from '@shared/router';

import '@kds/ui/styles';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
