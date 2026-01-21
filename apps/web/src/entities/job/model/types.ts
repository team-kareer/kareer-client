import { components, paths } from '@shared/types/schema';

export type JobPostingListResponse =
  paths['/api/v1/job-postings/bookmarks']['get']['responses']['200']['content']['*/*'];

export type JobPostingItem = components['schemas']['JobPostingResponse'];
