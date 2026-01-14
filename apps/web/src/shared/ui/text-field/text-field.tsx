import { Textarea } from '@kds/ui';

import * as styles from './text-area.css';

export const TextField = ({
  error = false,
  maxLength,
  value = '',
  ...textareaProps
}: TextFieldProps) => {
  const textCount = value.length;
  const isError = error || textCount > maxLength;

  return (
    <div>
      <Textarea error={isError} {...props} />
      {showCount && (
        <div className={styles.textCountRecipe({ error: isError })}>
          {textCount}/{maxLength}
        </div>
      )}
    </div>
  );
};
