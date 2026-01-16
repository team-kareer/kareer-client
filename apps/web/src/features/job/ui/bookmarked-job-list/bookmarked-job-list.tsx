import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';
import { getJobTagColor } from '@shared/utils/job-tag-color';

import * as styles from './bookmarked-job-list.css';

interface BookmarkedJobListItem {
  id: number;
  companyName: string;
  title: string;
  dueDate?: string;
  locations: string[];
  jobTypes?: string[];
  isScraped: boolean;
  imageUrl?: string;
  dDay: number;
  url: string;
}

interface BookmarkedJobListProps {
  jobs: BookmarkedJobListItem[];
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
        />
      ))}
    </div>
  );
};

export default BookmarkedJobList;
