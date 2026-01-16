import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';
import { JobItem } from '@entities/job/model/job.types';
import { getJobTagColor } from '@shared/utils/job-tag-color';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListProps {
  jobs: JobItem[];
  onScrap: (id: number) => void; // 로직은 부모에게 위임
}

const BookmarkedJobList = ({ jobs, onScrap }: BookmarkedJobListProps) => {
  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <BookmarkedJobCard
          key={job.id}
          {...job}
          jobTagColor={getJobTagColor(job.jobTypes?.[0])}
          scrapAction={
            <ScrapButton
              isScraped={job.isScraped}
              onClick={() => onScrap(job.id)}
            />
          }
          onClick={() => job.url && window.open(job.url, '_blank')}
        />
      ))}
    </div>
  );
};

export default BookmarkedJobList;
