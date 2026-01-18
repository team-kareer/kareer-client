import { paths } from '@shared/types/schema';

export type GoogleLoginResponse =
  paths['/api/v1/auth/code/exchange']['post']['responses']['200']['content']['*/*']['data'];
