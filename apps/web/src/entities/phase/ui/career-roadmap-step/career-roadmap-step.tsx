import { ReactNode } from 'react';

import * as styles from './career-roadmap-step.css';

interface CareerRoadmapStepProps {
  title: string;
  period: string;
  phase: number;
  onClick: () => void;
  isActive: boolean;
  bottom: ReactNode;
}

const CareerRoadmapStep = ({
  title,
  period,
  phase,
  onClick,
  isActive,
  bottom,
}: CareerRoadmapStepProps) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button({ isActive: isActive })}
        onClick={onClick}
      >
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.time}>{period}</time>
      </button>
      <div className={styles.stepbar}>
        <div className={styles.line({ isActive: isActive })} />
        <div className={styles.circle({ isActive: isActive })}>{phase}</div>
      </div>
      {bottom}
    </div>
  );
};

export default CareerRoadmapStep;
