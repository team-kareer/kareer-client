import LandingHeader from '@components/header/landing-header';
import HeroSection from '@sections/hero/hero-section';
import StatsSection from '@sections/stats/stats-section';

import * as styles from './page.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <main>
        <HeroSection />
        <StatsSection />
      </main>
    </div>
  );
};

export default Page;
