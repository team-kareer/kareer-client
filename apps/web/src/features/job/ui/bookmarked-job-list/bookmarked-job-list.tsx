import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';
import { JobItem } from '@entities/job/model/types';
import { calculateDDay } from '@shared/utils/dday-calculate';

import { useBookmarkedJobs } from '../../model/use-bookmarked-jobs';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobItem[];
  onScrap: (id: number) => void;
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  const { formattedJobs } = useBookmarkedJobs(jobs);

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
