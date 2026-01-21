import { ReactNode } from 'react';

import { Header, Navigation, TodoPanel } from '@widgets/layout';
import { useScroll } from '@shared/hooks/useScroll';

import * as styles from './app-layout.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { onScroll, className } = useScroll();
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.contentArea}>
        <Header />
        <div className={styles.mainArea}>
          <main
            className={`${styles.mainPage} ${className}`}
            onScroll={onScroll}
          >
            {children}
          </main>
          <TodoPanel />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
