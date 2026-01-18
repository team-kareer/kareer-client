import { PhaseOverview } from '@widgets/dashboard';
import { VisaStatusListSection } from '@widgets/dashboard/ui';
import { MyBookmarkedJobsSection } from '@widgets/dashboard/ui';

import * as styles from './dashboard-page.css';

const DashboardPage = () => {
  return (
    <main className={styles.container}>
      <VisaStatusListSection />
      <PhaseOverview />
      <MyBookmarkedJobsSection />
    </main>
  );
};

export default DashboardPage;
