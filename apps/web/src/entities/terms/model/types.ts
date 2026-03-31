import { components, paths } from '@shared/types/schema';

export type GetTermsListResponse =
  paths['/api/v1/terms']['get']['responses']['200']['content']['*/*'];

export type Term = components['schemas']['TermResponse'];
