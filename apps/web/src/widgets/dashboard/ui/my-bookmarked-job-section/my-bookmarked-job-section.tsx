import { MyBookmarkedJobs } from '@widgets/dashboard/ui';
import { Section } from '@shared/ui';

import * as styles from './my-bookmarked-job-section.css';

const MyBookmarkedJobsSection = () => {
  return (
    <main className={styles.container}>
      <Section
        title="Bookmarked Jobs"
        subtitle="Save jobs you're interested in and track them in one place"
      >
        <MyBookmarkedJobs />
      </Section>
    </main>
  );
};

export default MyBookmarkedJobsSection;
