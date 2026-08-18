import {
  CareerRoadmapSection,
  EarlyAccessSection,
  HeroSection,
  JobRecommendationSection,
  LandingFooter,
  LandingHeader,
  RealVoicesSection,
  StatsSection,
  TodoManagementSection,
  WhyKareerSection,
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
        <WhyKareerSection />
        <EarlyAccessSection />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
