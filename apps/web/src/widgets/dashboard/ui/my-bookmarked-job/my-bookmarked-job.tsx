import { useSuspenseQuery } from '@tanstack/react-query';

import { BookmarkedJobList } from '@features/job';
import { BOOKMARKED_JOB_QUERY_OPTIONS } from '@entities/job/queries/queries';

export const MyBookmarkedJobs = () => {
  const { data } = useSuspenseQuery(
    BOOKMARKED_JOB_QUERY_OPTIONS.GET_BOOKMARKED_JOB(),
  );

  const jobs = data?.jobPostingResponses ?? [];

  const handleRemove = () => {
    // 임시 삭제 로직
  };

  return <BookmarkedJobList jobs={jobs} onScrap={handleRemove} />;
};

export default MyBookmarkedJobs;
