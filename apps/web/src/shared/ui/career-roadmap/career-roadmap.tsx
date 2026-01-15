import { ReactNode } from 'react';

import * as styles from './career-roadmap.css';

interface CareerRoadmapProps {
  goal: string;
  children: ReactNode;
  actions?: ReactNode;
}

const CareerRoadmap = ({ goal, children, actions }: CareerRoadmapProps) => {
  return (
    <section className={styles.container}>
      <header>
        <span className={styles.header({ variant: 'default' })}>
          Your path to{' '}
        </span>
        <span className={styles.header({ variant: 'goal' })}>{goal}</span>
      </header>
      <div className={styles.roadmap}>{children}</div>
      {actions}
    </section>
  );
};

export default CareerRoadmap;
