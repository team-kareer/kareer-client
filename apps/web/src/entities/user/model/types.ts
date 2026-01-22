import { paths } from '@shared/types/schema';

export type GetUserInfoResponse =
  paths['/api/v1/members/me']['get']['responses']['200']['content']['*/*'];
export type GetUserStatusResponse =
  paths['/api/v1/members/me/status']['get']['responses']['200']['content']['*/*'];
