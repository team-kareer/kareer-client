import { QueryClient } from '@tanstack/react-query';

import { shouldRetry } from '@shared/apis/configs/query-config';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetry,
      staleTime: 0,
      gcTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
    },
  },
});
