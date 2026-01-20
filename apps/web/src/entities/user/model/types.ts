import { paths } from '@shared/types/schema';

export type GetUserStatusResponse =
  paths['/api/v1/members/me/status']['get']['responses']['200']['content']['*/*'];
