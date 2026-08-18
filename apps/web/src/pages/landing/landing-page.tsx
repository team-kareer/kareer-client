import {
  CareerRoadmapSection,
  HeroSection,
  JobRecommendationSection,
  LandingHeader,
  RealVoicesSection,
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
        <RealVoicesSection />
      </main>
    </div>
  );
};

export default LandingPage;
