import LandingHeader from '@components/header/landing-header';
import CareerRoadmapSection from '@sections/career-roadmap/career-roadmap-section';
import HeroSection from '@sections/hero/hero-section';
import JobRecommendationSection from '@sections/job-recommendation/job-recommendation-section';
import RealVoicesSection from '@sections/real-voices/real-voices-section';
import StatsSection from '@sections/stats/stats-section';
import TodoManagementSection from '@sections/todo-management/todo-management-section';
import WhyKareerSection from '@sections/why-kareer/why-kareer-section';

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
        <TodoManagementSection />
        <RealVoicesSection />
        <WhyKareerSection />
      </main>
    </div>
  );
};

export default Page;
