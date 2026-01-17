import { useMemo } from 'react';

import { JobItem } from '@entities/job/model/types';
import { calculateDDay } from '@shared/utils/dday-calculate';
import { getJobTagColor } from '@shared/utils/job-tag-color';

export const useBookmarkedJobs = (jobs: JobItem[]) => {
  const formattedJobs = useMemo(() => {
    return jobs.map((job) => ({
      ...job,
      dDay: calculateDDay(job.dueDate),
      jobTagColor: getJobTagColor(job.jobTypes?.[0]),
      handleOpenDetail: () => job.url && window.open(job.url, '_blank'),
    }));
  }, [jobs]);

  return { formattedJobs };
};
