import * as styles from './progress-bar.css';

interface ProgressBarProps {
  total: number;
  done: number;
}

const ProgressBar = ({ total, done }: ProgressBarProps) => {
  return <progress value={done} max={total} className={styles.progress} />;
};

export default ProgressBar;
