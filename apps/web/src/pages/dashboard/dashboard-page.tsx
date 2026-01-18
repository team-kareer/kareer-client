import {
  UserCareerRoadmapSection,
  VisaStatusListSection,
} from '@widgets/dashboard/ui';
import MyBookmarkedJobsSection from '@widgets/dashboard/ui/my-bookmarked-job-section/my-bookmarked-job-section';

import * as styles from './dashboard-page.css';

const DashboardPage = () => {
  return (
    <main className={styles.container}>
      <VisaStatusListSection />
      <UserCareerRoadmapSection />
      <MyBookmarkedJobsSection />
    </main>
  );
};

export default DashboardPage;
