import JobPreviewCard from './job-preview-card';

import * as styles from './job-recommendation-preview.css';

const JOB_PREVIEWS = [
  {
    id: 'part-time',
    company: 'Hunjin',
    title: 'Frontend Developer',
    date: 'Jan 24, 2026',
    deadline: 'D-5',
    employmentType: 'Part-time',
    tagTone: 'blue',
    location: 'Incheon',
  },
  {
    id: 'regular',
    company: 'Junghoon',
    title: 'Backend Developer',
    date: 'Jan 24, 2026',
    deadline: 'D-5',
    employmentType: 'Regular',
    tagTone: 'green',
    location: 'Seoul',
  },
  {
    id: 'discussion',
    company: 'Yoonji',
    title: 'AI Developer',
    date: 'Jan 24, 2026',
    deadline: 'D-5',
    employmentType: 'Discussion',
    tagTone: 'gray',
    location: 'Seoul',
  },
  {
    id: 'contract',
    company: 'Haeun',
    title: 'Frontend Developer',
    date: 'Jan 24, 2026',
    deadline: 'D-5',
    employmentType: 'Contract',
    tagTone: 'orange',
    location: 'Changwon',
  },
] as const;

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
