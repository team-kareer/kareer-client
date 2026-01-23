import Lottie from 'lottie-react';

import { loadingAnimation } from '@shared/assets';

import * as styles from './page-loading.css';

interface PageLoaderProps {
  text: string;
}

export const PageLoader = ({ text }: PageLoaderProps) => {
  return (
    <main className={styles.container}>
      <Lottie animationData={loadingAnimation} className={styles.lottie} />
      <span className={styles.text}>{text}</span>
    </main>
  );
};

export default PageLoader;
