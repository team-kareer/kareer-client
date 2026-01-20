import { paths } from '@shared/types/schema';

export type GetTodoListResponse =
  paths['/api/v1/action-items']['get']['responses']['200']['content']['*/*']['data'];
