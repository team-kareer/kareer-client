import * as styles from './middle-ellipsis.css';

interface MiddleEllipsisProps {
  text: string;
  endChars: number;
  className: string;
}

const MiddleEllipsis = ({ text, endChars, className }: MiddleEllipsisProps) => {
  return (
    <p className={`${styles.wrapper} ${className}`}>
      <span className={styles.start}>{text.slice(0, -endChars)}</span>
      <span className={styles.end}>{text.slice(-endChars)}</span>
    </p>
  );
};

export default MiddleEllipsis;
