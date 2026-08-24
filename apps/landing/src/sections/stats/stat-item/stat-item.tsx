import * as styles from './stat-item.css';

interface StatItemProps {
  value: number;
  description: string;
}

const StatItem = ({ value, description }: StatItemProps) => (
  <div className={styles.stat}>
    <p className={styles.value}>
      <span className={styles.accent}>{value}</span>%
    </p>
    <p className={styles.description}>{description}</p>
  </div>
);

export default StatItem;
