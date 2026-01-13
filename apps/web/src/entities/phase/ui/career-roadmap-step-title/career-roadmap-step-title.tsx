import * as styles from './career-roadmap-step-title.css';

interface CareerRoadmapStepTitleProps {
  title: string;
  period: string;
  isActive: boolean;
}

const CareerRoadmapStepTitle = ({
  title,
  period,
  isActive,
}: CareerRoadmapStepTitleProps) => {
  return (
    <button type="button" className={styles.container({ isActive: isActive })}>
      <h3 className={styles.title({ isActive: isActive })}>{title}</h3>
      <time className={styles.time({ isActive: isActive })}>{period}</time>
    </button>
  );
};

export default CareerRoadmapStepTitle;
