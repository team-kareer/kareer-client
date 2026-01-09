import { ReactNode } from 'react';

import Header from '@widgets/layout/components/header/header';
import Nav from '@widgets/layout/components/nav/nav';
import TodoPanel from '@widgets/layout/components/todo-panel/todo-panel';

import * as styles from './app-layout.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.contentArea}>
        <Header />
        <div className={styles.mainArea}>
          <main className={styles.mainContent}>{children}</main>
          <TodoPanel />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
