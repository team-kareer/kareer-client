import { operations, paths } from '@shared/types/schema';

export type GetAiGuideRequest = operations['getAiGuide']['parameters']['path'];

export type GetAIGuideResponse =
  paths['/api/v1/phase-actions/{phaseActionId}/guide']['get']['responses']['200']['content']['*/*'];
