import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@shared/apis/providers/query-client';

import DevtoolsProvider from './devtools-provider';

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <DevtoolsProvider />
    </QueryClientProvider>
  );
};

export default QueryProvider;
