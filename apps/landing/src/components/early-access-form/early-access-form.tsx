import { type FormEvent, useState } from 'react';
import { SuccessCircleIcon, XIcon } from '@kds/icons';
import { Button, Input, useToast } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import * as styles from './early-access-form.css';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : undefined;

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
  const { t } = useTranslation();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      return;
    }

    const form = event.currentTarget;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      form.reset();
      showToast({
        message: t('form.success'),
        icon: <SuccessCircleIcon width={24} height={24} />,
      });
    } catch {
      showToast({
        message: t('form.error'),
        icon: <XIcon width={24} height={24} color="white" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action={FORMSPREE_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
      >
        <label className={styles.inputWrapper}>
          <span className={styles.visuallyHidden}>{placeholder}</span>
          <Input name="email" type="email" placeholder={placeholder} required />
        </label>
        <input name="_gotcha" hidden />
        <Button
          type="submit"
          preset="large_primary"
          disabled={!FORMSPREE_ENDPOINT || isSubmitting}
        >
          {buttonLabel}
        </Button>
      </form>
      <p className={styles.note({ variant })}>{note}</p>
    </div>
  );
};

export default EarlyAccessForm;
