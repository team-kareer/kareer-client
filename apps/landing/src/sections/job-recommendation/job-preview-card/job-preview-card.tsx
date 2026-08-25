import { BookmarkIcon } from '@kds/icons';

import * as styles from './job-preview-card.css';

interface JobPreviewCardProps {
  company: string;
  title: string;
  date: string;
  deadline: string;
  employmentType: string;
  tagTone: keyof typeof styles.jobTag;
  location?: string;
}

const JobPreviewCard = ({
  company,
  title,
  date,
  deadline,
  employmentType,
  tagTone,
  location,
}: JobPreviewCardProps) => {
  return (
    <article className={styles.jobCard}>
      <div className={styles.jobImage}>
        <span className={styles.deadline}>{deadline}</span>
        <BookmarkIcon width={14} height={14} />
      </div>
      <div className={styles.jobBody}>
        <p className={styles.company}>{company}</p>
        <p className={styles.jobTitle}>{title}</p>
        <p className={styles.date}>{date}</p>
        <div className={styles.jobTags}>
          <span className={styles.jobTag[tagTone]}>{employmentType}</span>
          {location && <span className={styles.jobTag.gray}>{location}</span>}
        </div>
      </div>
    </article>
  );
};

export default JobPreviewCard;
