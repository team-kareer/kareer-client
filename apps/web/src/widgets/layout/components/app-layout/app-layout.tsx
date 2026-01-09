import { ReactNode } from 'react';

import Header from '@widgets/layout/components/header/header';
import Navigation from '@widgets/layout/components/navigation/navigation';
import TodoPanel from '@widgets/layout/components/todo-panel/todo-panel';

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
