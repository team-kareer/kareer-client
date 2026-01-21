import { useQuery } from '@tanstack/react-query';

import { BookmarkedJobList } from '@features/job/ui';
import { BOOKMARKED_JOB_QUERY_OPTIONS } from '@entities/job/queries';

export const MyBookmarkedJobs = () => {
  const { data } = useQuery(BOOKMARKED_JOB_QUERY_OPTIONS.GET_BOOKMARKED_JOB());

  const jobs = data?.jobPostingResponses ?? [];

  const handleRemove = () => {
    // TODO: 삭제 api 추가
  };

  return <BookmarkedJobList jobs={jobs} onScrap={handleRemove} />;
};

export default MyBookmarkedJobs;
