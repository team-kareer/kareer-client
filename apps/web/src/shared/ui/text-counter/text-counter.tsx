import * as styles from './text-counter.css';

interface TextCounterProps {
  current: number;
  max: number;
  isError: boolean;
}

export const TextCounter = ({ current, max, isError }: TextCounterProps) => {
  return (
    <span className={styles.textCountRecipe({ error: isError })}>
      {current}/{max}
    </span>
  );
};
