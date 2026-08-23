import LandingHeader from '@components/header/landing-header';
import HeroSection from '@sections/hero/hero-section';

import * as styles from './page.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Page;
