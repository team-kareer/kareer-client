import { components, paths } from '@shared/types/schema';

export type GetPhaseListResponse =
  paths['/api/v1/phases']['get']['responses']['200']['content']['*/*'];
export type GetPhaseItemHomeResponse =
  paths['/api/v1/phases/{phaseId}/home']['get']['responses']['200']['content']['*/*'];

export type Phase = components['schemas']['PhaseResponse'];
export type RequiredActionType = 'Visa' | 'Career';
