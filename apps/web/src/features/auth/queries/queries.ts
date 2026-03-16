import { mutationOptions } from '@tanstack/react-query';

import { logOut } from '@features/auth/api/sign-out';
import { authService } from '@shared/auth/auth-service';

export const AUTH_MUTATION_OPTIONS = {
  LOGOUT: () => {
    return mutationOptions({
      mutationFn: logOut,
      onSuccess: () => authService.logout(),
    });
  },
};
