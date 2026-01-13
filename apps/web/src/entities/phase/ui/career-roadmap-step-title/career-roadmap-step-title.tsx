import * as styles from './career-roadmap-step-title.css';

interface CareerRoadmapStepTitleProps {
  title: string;
  period: string;
  phase: number;
  isActive: boolean;
}

const CareerRoadmapStepTitle = ({
  title,
  period,
  phase,
  isActive,
}: CareerRoadmapStepTitleProps) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button({ isActive: isActive })}>
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.time}>{period}</time>
      </button>
      <div className={styles.stepbar}>
        <div className={styles.line({ isActive: isActive })} />
        <div className={styles.circle({ isActive: isActive })}>{phase}</div>
      </div>
    </div>
  );
};

export default CareerRoadmapStepTitle;
