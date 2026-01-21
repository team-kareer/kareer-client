import { useMemo } from 'react';

import { JobPostingItem } from '@entities/job/model/types';
import { calculateDDay } from '@shared/utils/dday-calculate';
import { getJobTagColor } from '@shared/utils/job-tag-color';

const useBookmarkedJobs = (jobs: JobPostingItem[]) => {
  const formattedJobs = useMemo(() => {
    return jobs.map((job) => ({
      ...job,
      dDay: calculateDDay(job.deadline),
      // jobTagColor: getJobTagColor(job.arrangement?.[0]),
      jobTagColor: getJobTagColor(job.arrangement),
      handleOpenDetail: () =>
        job.websiteUrl && window.open(job.websiteUrl, '_blank'),
    }));
  }, [jobs]);

  return { formattedJobs };
};

export default useBookmarkedJobs;
