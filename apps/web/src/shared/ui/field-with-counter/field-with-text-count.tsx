import { ReactNode } from 'react';

import { TextCounter } from '@shared/ui/text-counter/text-counter';

import * as styles from './field-with-text-count.css';

interface WithTextCountProps {
  children: (isOverMax: boolean) => ReactNode;
  value: string;
  maxLength?: number;
  errorMessage?: string;
}

const NON_BREAKING_SPACE = '\u00A0';

const WithTextCount = ({
  children,
  value,
  maxLength,
  errorMessage,
}: WithTextCountProps) => {
  const textCount = value.length;
  const isOverMax = maxLength ? textCount > maxLength : false;
  const shouldRenderFooter =
    maxLength !== undefined || errorMessage !== undefined;

  return (
    <div className={styles.container}>
      {children(isOverMax)}
      {shouldRenderFooter && (
        <div className={styles.footer}>
          <p className={styles.errorMessage}>
            {errorMessage || NON_BREAKING_SPACE}
          </p>
          {maxLength && (
            <TextCounter
              current={textCount}
              max={maxLength}
              isError={isOverMax}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WithTextCount;
