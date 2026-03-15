import { ReactNode } from 'react';

import { TextCounter } from '@shared/ui/text-counter/text-counter';

import * as styles from './field-with-text-count.css';

interface WithTextCountProps {
  children: (isOverMax: boolean) => ReactNode;
  value: string;
  maxLength?: number;
}

const WithTextCount = ({ children, value, maxLength }: WithTextCountProps) => {
  const textCount = value.length;
  const isOverMax = maxLength ? textCount > maxLength : false;

  return (
    <div className={styles.container}>
      {children(isOverMax)}
      {maxLength !== undefined && (
        <TextCounter current={textCount} max={maxLength} isError={isOverMax} />
      )}
    </div>
  );
};

export default WithTextCount;
