import { VisaStatusListSection } from '@widgets/dashboard/ui';
import { MyBookmarkedJobsSection } from '@widgets/dashboard/ui';
import PhaseOverviewSection from '@widgets/dashboard/ui/phase-overview-section/phase-overview-section';

import * as styles from './dashboard-page.css';

const DashboardPage = () => {
  return (
    <main className={styles.container}>
      <VisaStatusListSection />
      <PhaseOverviewSection />
      <MyBookmarkedJobsSection />
    </main>
  );
};

export default DashboardPage;
