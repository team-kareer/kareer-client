import { useBookmarkedJobs } from '@features/job/model';
import { ScrapButton } from '@features/job/ui';
import { BookmarkedJobCard } from '@entities/job';
import { JobPostingItem } from '@entities/job/model/types';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobPostingItem[];
  onScrap: (id: number) => void;
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  const { formattedJobs } = useBookmarkedJobs(jobs);

  return (
    <div className={styles.container}>
      {formattedJobs.map((job) => {
        if (!job.jobPostingId) {
          return null;
        }

        return (
          <BookmarkedJobCard
            key={job.jobPostingId}
            {...job}
            jobPostingId={job.jobPostingId}
            dDay={job.dDay}
            scrapAction={
              <ScrapButton
                isScraped={job.isBookmarked ?? false}
                onClick={() => onScrap(job.jobPostingId!)}
              />
            }
            onClick={job.handleOpenDetail}
          />
        );
      })}
    </div>
  );
};

export default BookmarkedJobList;
