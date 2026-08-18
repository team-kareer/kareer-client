import {
  HeroSection,
  JobRecommendationSection,
  LandingHeader,
  StatsSection,
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
      </main>
    </div>
  );
};

export default LandingPage;
