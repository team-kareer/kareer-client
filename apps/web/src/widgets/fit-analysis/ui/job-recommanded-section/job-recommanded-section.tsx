import { SectionHeader } from '@kds/ui';

import { MyBookmarkedJobs } from '@widgets/dashboard';
import UploadBox from '@widgets/fit-analysis/ui/upload-box/upload-box';

import * as styles from './job-recommanded-section.css';

export const JobRecommendationSection = () => {
  return (
    <section className={styles.container}>
      <SectionHeader title="Find Your Perfect Job Match" />
      <UploadBox />
      <MyBookmarkedJobs />
    </section>
  );
};

export default JobRecommendationSection;
