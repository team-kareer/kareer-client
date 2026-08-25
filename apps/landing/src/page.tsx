import LandingHeader from '@components/header/landing-header';
import CareerRoadmapSection from '@sections/career-roadmap/career-roadmap-section';
import HeroSection from '@sections/hero/hero-section';
import JobRecommendationSection from '@sections/job-recommendation/job-recommendation-section';
import StatsSection from '@sections/stats/stats-section';

import * as styles from './page.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <JobRecommendationSection />
        <CareerRoadmapSection />
      </main>
    </div>
  );
};

export default Page;
