import { useTextCount } from '@shared/hooks/use-text-count';
import { TextCounter } from '@shared/ui/text-counter/text-counter';

import * as styles from './field-with-text-count.css';

interface WithTextCountProps {
  children: (isOverMax: boolean) => React.ReactNode;
  value: string;
  maxLength?: number;
  showCount?: boolean;
}

export const WithTextCount = ({
  children,
  value,
  maxLength,
  showCount = false,
}: WithTextCountProps) => {
  const { textCount, isOverMax } = useTextCount(value, maxLength);

  return (
    <div className={styles.container}>
      {children(isOverMax)}
      {showCount && maxLength !== undefined && (
        <TextCounter current={textCount} max={maxLength} isError={isOverMax} />
      )}
    </div>
  );
};
