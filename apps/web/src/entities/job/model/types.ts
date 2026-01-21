import { components, paths } from '@shared/types/schema';

export type RecommendJobPostingsRequestBody = NonNullable<
  paths['/api/v1/job-postings/recommend']['post']['requestBody']
>['content']['multipart/form-data'];

export type RecommendJobPostingsResponse =
  paths['/api/v1/job-postings/recommend']['post']['responses']['200']['content']['*/*'];

export interface RecommendJobPostingsParams {
  files: File[];
}

export type JobPostingListResponse =
  paths['/api/v1/job-postings/bookmarks']['get']['responses']['200']['content']['*/*'];

export type JobPostingItem = components['schemas']['JobPostingResponse'];
