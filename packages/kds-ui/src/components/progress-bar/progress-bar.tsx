import * as styles from './progress-bar.css';

interface ProgressBarProps {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return <progress value={percent} max={100} className={styles.progress} />;
};

export default ProgressBar;
