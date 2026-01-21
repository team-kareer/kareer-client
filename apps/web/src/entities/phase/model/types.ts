import { components, paths } from '@shared/types/schema';

export type GetPhaseListResponse =
  paths['/api/v1/phases']['get']['responses']['200']['content']['*/*'];
export type Phase = components['schemas']['PhaseResponse'];
