import Lottie from 'lottie-react';

import { loadingAnimation } from '@shared/assets';

import * as styles from './page-loading.css';

export const PageLoader = () => {
  return (
    <main className={styles.container}>
      <Lottie animationData={loadingAnimation} className={styles.lottie} />
      <span className={styles.text}>Please wait a bit...</span>
    </main>
  );
};

export default PageLoader;
