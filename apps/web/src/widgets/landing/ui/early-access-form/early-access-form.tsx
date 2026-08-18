import { Button, Input } from '@kds/ui';

import * as styles from './early-access-form.css';

interface EarlyAccessFormProps {
  buttonLabel: string;
  note: string;
  placeholder: string;
  variant?: 'hero' | 'final';
}

const EarlyAccessForm = ({
  buttonLabel,
  note,
  placeholder,
  variant = 'hero',
}: EarlyAccessFormProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input type="email" placeholder={placeholder} />
        </div>
        <Button preset="large_primary">{buttonLabel}</Button>
      </div>
      <p className={styles.note({ variant })}>{note}</p>
    </div>
  );
};

export default EarlyAccessForm;
