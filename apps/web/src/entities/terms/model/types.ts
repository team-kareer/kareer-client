import { components, paths } from '@shared/types/schema';

export type GetTermsListResponse =
  paths['/api/v1/terms']['get']['responses']['200']['content']['*/*'];

export type Term = components['schemas']['TermResponse'];

export type PostTermAgreementsBody =
  components['schemas']['MemberTermsRequest'];

export type PostTermAgreementsResponse =
  paths['/api/v1/members/term-agreements']['post']['responses']['200']['content']['*/*'];
