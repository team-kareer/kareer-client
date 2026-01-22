import { components, operations, paths } from '@shared/types/schema';

export type GetAiGuideRequest = operations['getAiGuide']['parameters']['path'];

export type GetAIGuideResponse =
  paths['/api/v1/phase-actions/{phaseActionId}/guide']['get']['responses']['200']['content']['*/*'];

export type GetPhaseListResponse =
  paths['/api/v1/phases']['get']['responses']['200']['content']['*/*'];
export type GetPhaseItemHomeResponse =
  paths['/api/v1/phases/{phaseId}/home']['get']['responses']['200']['content']['*/*'];
export type GetPhaseItemRoadmapResponse =
  paths['/api/v1/phases/{phaseId}/roadmap']['get']['responses']['200']['content']['*/*'];

export type Phase = components['schemas']['PhaseResponse'];
export type RequiredActionType = 'Visa' | 'Career';
