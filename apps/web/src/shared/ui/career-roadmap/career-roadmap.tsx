import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import * as styles from './career-roadmap.css';

interface CareerRoadmapProps {
  prefix?: string;
  goal: string;
  children: ReactNode;
  actions?: ReactNode;
}

const CareerRoadmap = ({
  prefix = 'Your path to ',
  goal,
  children,
  actions,
}: CareerRoadmapProps) => {
  const { i18n } = useTranslation();
  const isKorean = i18n.resolvedLanguage === 'ko';

  return (
    <section className={styles.container}>
      <header>
        {isKorean ? (
          <>
            <span className={styles.header({ variant: 'goal' })}>{goal}</span>
            <span className={styles.header({ variant: 'default' })}>
              {prefix}
            </span>
          </>
        ) : (
          <>
            <span className={styles.header({ variant: 'default' })}>
              {prefix}
            </span>
            <span className={styles.header({ variant: 'goal' })}>{goal}</span>
          </>
        )}
      </header>
      <div className={styles.roadmap}>{children}</div>
      {actions}
    </section>
  );
};

export default CareerRoadmap;
