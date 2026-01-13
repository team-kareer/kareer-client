import * as styles from './career-roadmap-bar.css';

interface CareerRoadmapBarProps {
  phase: number;
  isActive: boolean;
}

const CareerRoadmapBar = ({ phase, isActive }: CareerRoadmapBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.line({ isActive: isActive })} />
      <div className={styles.circle({ isActive: isActive })}>{phase}</div>
    </div>
  );
};

export default CareerRoadmapBar;
