import LandingFooter from '@layout/footer/landing-footer';
import LandingHeader from '@layout/header/landing-header';
import CareerRoadmapSection from '@sections/career-roadmap/career-roadmap-section';
import EarlyAccessSection from '@sections/early-access/early-access-section';
import HeroSection from '@sections/hero/hero-section';
import JobRecommendationSection from '@sections/job-recommendation/job-recommendation-section';
import RealVoicesSection from '@sections/real-voices/real-voices-section';
import StatsSection from '@sections/stats/stats-section';
import TodoManagementSection from '@sections/todo-management/todo-management-section';
import WhyKareerSection from '@sections/why-kareer/why-kareer-section';

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
