import { useMemo } from 'react';

import { JobPostingItem } from '@entities/job/model/types';
import { calculateDDay } from '@shared/utils/dday-calculate';
import {
  formatAddressDisplay,
  formatArrangementDisplay,
  getJobTagColor,
} from '@shared/utils/job-formatter';

const useBookmarkedJobs = (jobs: JobPostingItem[]) => {
  const formattedJobs = useMemo(() => {
    return jobs.map((job) => ({
      ...job,
      dDay: calculateDDay(job.deadline),
      jobTagColor: getJobTagColor(job.arrangement),
      arrangementDisplay: formatArrangementDisplay(job.arrangement),
      addressDisplay: formatAddressDisplay(job.address),
      handleOpenDetail: () =>
        job.websiteUrl && window.open(job.websiteUrl, '_blank'),
    }));
  }, [jobs]);

  return { formattedJobs };
};

export default useBookmarkedJobs;
