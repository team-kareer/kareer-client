import {
  CareerRoadmapSection,
  HeroSection,
  JobRecommendationSection,
  LandingHeader,
  StatsSection,
  TodoManagementSection,
} from '@widgets/landing';

import * as styles from './landing-page.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <JobRecommendationSection />
        <CareerRoadmapSection />
        <TodoManagementSection />
      </main>
    </div>
  );
};

export default LandingPage;
