import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { BookmarkedJobList } from '@features/job';
import {
  BOOKMARKED_JOB_QUERY_KEY,
  BOOKMARKED_JOB_QUERY_OPTIONS,
  JOB_MUTATION_OPTIONS,
} from '@entities/job/queries';

export const MyBookmarkedJobs = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery(BOOKMARKED_JOB_QUERY_OPTIONS.GET_BOOKMARKED_JOB());

  const { mutate: toggleBookmark } = useMutation({
    ...JOB_MUTATION_OPTIONS.TOGGLE_BOOKMARK_JOB_POSTING(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      });
    },
  });

  const jobs = data?.jobPostingResponses ?? [];

  const handleRemove = (jobPostingId: number) => {
    toggleBookmark({
      jobPostingId,
    });
  };

  return <BookmarkedJobList jobs={jobs} onScrap={handleRemove} />;
};

export default MyBookmarkedJobs;
