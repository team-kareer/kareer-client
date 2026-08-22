import { JOB_PREVIEWS } from '@shared/constants';

import JobPreviewCard from '../job-preview-card/job-preview-card';

import * as styles from './job-recommendation-preview.css';

const JobRecommendationPreview = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.uploadBar}>
        <span className={styles.upload}>+ Upload</span>
        <span className={styles.file}>resume.pdf ✕</span>
        <div className={styles.todoOption}>
          <span>Include completed to-dos</span>
          <span className={styles.toggle}>
            <span className={styles.toggleThumb} />
          </span>
        </div>
      </div>

      <div className={styles.jobGrid}>
        {JOB_PREVIEWS.map(({ id, ...job }) => (
          <JobPreviewCard key={id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobRecommendationPreview;
