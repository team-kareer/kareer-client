import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { BookmarkedJobList } from '@features/job';
import {
  BOOKMARKED_JOB_QUERY_KEY,
  BOOKMARKED_JOB_QUERY_OPTIONS,
  JOB_MUTATION_OPTIONS,
} from '@entities/job/queries';
import { ROUTE_PATH } from '@shared/router';
import { EmptyLayout, PageLoader } from '@shared/ui';

export const MyBookmarkedJobs = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery(
    BOOKMARKED_JOB_QUERY_OPTIONS.GET_BOOKMARKED_JOB(),
  );

  const { mutate: toggleBookmark } = useMutation({
    ...JOB_MUTATION_OPTIONS.TOGGLE_BOOKMARK_JOB_POSTING(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      });
    },
  });

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

  if (isPending) {
    return <PageLoader text="Please wait a bit..." />;
  }

  if (jobs.length === 0) {
    return (
      <EmptyLayout
        variant="section"
        onAction={() => navigate(ROUTE_PATH.FITANALYSIS)}
      />
    );
  }

  return <BookmarkedJobList jobs={jobs} onScrap={handleRemove} />;
};

export default MyBookmarkedJobs;
