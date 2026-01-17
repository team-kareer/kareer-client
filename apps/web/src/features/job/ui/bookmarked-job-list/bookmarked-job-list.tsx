import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';
import { JobItem } from '@entities/job/model/job.types';
import { calculateDDay } from '@shared/utils/dday-calculate';
import { getJobTagColor } from '@shared/utils/job-tag-color';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobItem[];
  onScrap: (id: number) => void;
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  return (
    <div className={styles.container}>
      {jobs.map((job) => {
        const dDay = calculateDDay(job.dueDate) ?? 0;
        return (
          <BookmarkedJobCard
            key={job.id}
            {...job}
            dDay={dDay}
            jobTagColor={getJobTagColor(job.jobTypes?.[0])}
            scrapAction={
              <ScrapButton
                isScraped={job.isScraped}
                onClick={() => onScrap(job.id)}
              />
            }
            onClick={() => job.url && window.open(job.url, '_blank')}
          />
        );
      })}
    </div>
  );
};

export default BookmarkedJobList;
