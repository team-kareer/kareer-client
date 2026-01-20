import { paths } from '@shared/types/schema';

export type GetUserInfoResponse =
  paths['/api/v1/members/me']['get']['responses']['200']['content']['*/*']['data'];
