import {
  BookmarkJobPostingParams,
  BookmarkJobPostingResponse,
  END_POINT,
} from '@entities/job';
import { api } from '@shared/apis/configs/instance';

export const toggleBookmarkJobPosting = async (
  params: BookmarkJobPostingParams,
): Promise<BookmarkJobPostingResponse> => {
  const endpoint = END_POINT.JOB.POST_JOB_BOOKMARK.replace(
    '{jobPostingId}',
    String(params.jobPostingId),
  );

  return api
    .post(endpoint, {
      timeout: false,
    })
    .json<BookmarkJobPostingResponse>();
};
