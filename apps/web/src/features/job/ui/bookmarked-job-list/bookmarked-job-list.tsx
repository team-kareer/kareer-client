import { useNavigate } from 'react-router';

import { useBookmarkedJobs } from '@features/job/model';
import { ScrapButton } from '@features/job/ui';
import { BookmarkedJobCard } from '@entities/job';
import { JobPostingItem } from '@entities/job/model/types';
import { ROUTE_PATH } from '@shared/router';
import { EmptyLayout } from '@shared/ui';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobPostingItem[];
  onScrap: (id: number) => void;
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  const navigate = useNavigate();
  const { formattedJobs } = useBookmarkedJobs(jobs);

  const handleMoveToFitAnalysis = () => {
    navigate(ROUTE_PATH.FITANALYSIS);
  };

  if (jobs.length === 0) {
    return <EmptyLayout variant="section" onAction={handleMoveToFitAnalysis} />;
  }

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
                isScraped={job.isBookmarked ?? true}
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
