import { components, paths } from '@shared/types/schema';

export type GetTodoListResponse =
  paths['/api/v1/roadmap/action-items']['get']['responses']['200']['content']['*/*'];
export type ActionItem = components['schemas']['ActionItemResponse'];
export type ActionItemList = components['schemas']['ActionItemListResponse'];
