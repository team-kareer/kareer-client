import {
  MyBookmarkedJobs,
  UserCareerRoadmap,
  VisaStatusList,
} from '@widgets/dashboard/ui';
import { Section } from '@shared/ui';

import * as styles from './dashboard-page.css';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <Section title="My Status">
        <VisaStatusList />
      </Section>

      <Section
        title="Career Roadmap"
        subtitle="Track your progress toward key career milestones"
      >
        <UserCareerRoadmap />
      </Section>

      <Section
        title="Bookmarked Jobs"
        subtitle="Save jobs you're interested in and track them in one place"
      >
        <MyBookmarkedJobs />
      </Section>
    </div>
  );
};

export default DashboardPage;
