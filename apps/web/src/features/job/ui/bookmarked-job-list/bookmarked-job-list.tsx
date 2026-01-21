import { useNavigate } from 'react-router';

import { ScrapButton } from '@features/job';
import { useBookmarkedJobs } from '@features/job/model';
import { BookmarkedJobCard } from '@entities/job';
import { JobItem } from '@entities/job/model/types';
import { ROUTE_PATH } from '@shared/router';
import { EmptyLayout } from '@shared/ui';
import { calculateDDay } from '@shared/utils/dday-calculate';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobItem[];
  onScrap: (id: number) => void;
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  const navigate = useNavigate();
  const { formattedJobs } = useBookmarkedJobs(jobs);

  const handleMoveToFitAnalysis = () => {
    navigate(ROUTE_PATH.FITANALYSIS);
  };

  if (formattedJobs.length === 0) {
    return <EmptyLayout variant="section" onAction={handleMoveToFitAnalysis} />;
  }

  return (
    <div className={styles.container}>
      {formattedJobs.map((job) => {
        const dDay = calculateDDay(job.dueDate);
        return (
          <BookmarkedJobCard
            key={job.id}
            {...job}
            dDay={dDay}
            scrapAction={
              <ScrapButton
                isScraped={job.isScraped}
                onClick={() => onScrap(job.id)}
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
