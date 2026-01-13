import { ReactNode } from 'react';

import { Header, Navigation, TodoPanel } from '@widgets/layout';

import * as styles from './app-layout.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.contentArea}>
        <Header />
        <div className={styles.mainArea}>
          <main className={styles.mainPage}>{children}</main>
          <TodoPanel />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
