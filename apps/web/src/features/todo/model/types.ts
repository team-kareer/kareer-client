import { paths } from '@shared/types/schema';

export type PostAddTodoItemRequest =
  paths['/api/v1/phase-actions/{phaseActionId}/todo']['post']['parameters']['path']['phaseActionId'];

export type PostAddTodoItemResponse =
  paths['/api/v1/phase-actions/{phaseActionId}/todo']['post']['responses'][200]['content']['*/*'];
