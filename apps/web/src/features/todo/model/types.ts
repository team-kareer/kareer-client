import type { ActionItem } from '@entities/todo';
import { paths } from '@shared/types/schema';

export type PostAddTodoItemRequest =
  paths['/api/v1/roadmap/phase-actions/{phaseActionId}/todo']['post']['parameters']['path']['phaseActionId'];

export type PostAddTodoItemResponse =
  paths['/api/v1/roadmap/phase-actions/{phaseActionId}/todo']['post']['responses'][200]['content']['*/*'];

export type PatchToggleCheckboxRequest =
  paths['/api/v1/roadmap/action-items/{actionItemId}/completed']['patch']['parameters']['path']['actionItemId'];

export type PatchToggleCHeckboxResponse =
  paths['/api/v1/roadmap/action-items/{actionItemId}/completed']['patch']['responses']['200']['content']['*/*'];

export type TodoActionsType = 'VISA' | 'CAREER';

export type PostCreateTodoBody =
  paths['/api/v1/roadmap/action-items']['post']['requestBody']['content']['application/json'];

export type PostCreateTodoRequest = {
  title: string;
  deadline: string;
  actionsType: TodoActionsType;
};

export type PostCreateTodoResponse =
  paths['/api/v1/roadmap/action-items']['post']['responses']['200']['content']['*/*'];

export type PatchUpdateTodoBody =
  paths['/api/v1/roadmap/action-items/{actionItemId}']['patch']['requestBody']['content']['application/json'];

export type PatchUpdateTodoRequest = {
  actionItemId: number;
  title: string;
  deadline: string;
};

export type PatchUpdateTodoResponse =
  paths['/api/v1/roadmap/action-items/{actionItemId}']['patch']['responses']['200']['content']['*/*'];

export type DeleteTodoRequest = {
  actionItemId: paths['/api/v1/roadmap/action-items/{actionItemId}']['delete']['parameters']['path']['actionItemId'];
};

export type TodoItemResponseData = ActionItem;
