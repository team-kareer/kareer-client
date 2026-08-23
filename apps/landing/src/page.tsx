import LandingHeader from '@components/header/landing-header';

import * as styles from './page.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <LandingHeader />
      <main />
    </div>
  );
};

export default Page;
