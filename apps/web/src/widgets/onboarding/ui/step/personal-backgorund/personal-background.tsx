import { Checkbox } from '@kds/ui';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { FormTextareaField } from '@widgets/onboarding';
import { validateText } from '@features/onboarding/model/validation';
import { type OnboardingForm } from '@entities/onboarding';

import * as styles from './personal-background.css';

const PREPARATION_STATUS_OPTIONS = [
  'I have already submitted job applications',
  'Currently working part-time or doing an internship',
  'Resume and portfolio are ready',
] as const;

const PREPARATION_STATUS_LABEL_KEYS: Record<
  (typeof PREPARATION_STATUS_OPTIONS)[number],
  string
> = {
  'I have already submitted job applications':
    'steps.background.preparationStatus.options.alreadyApplied',
  'Currently working part-time or doing an internship':
    'steps.background.preparationStatus.options.partTimeOrInternship',
  'Resume and portfolio are ready':
    'steps.background.preparationStatus.options.resumeReady',
};

const PLACEHOLDER_BY_TARGET_JOB_KEYS: Record<string, string> = {
  Developer: 'steps.background.placeholderByTargetJob.developer',
  'Data Analyst': 'steps.background.placeholderByTargetJob.dataAnalyst',
  Marketer: 'steps.background.placeholderByTargetJob.marketing',
  'Global Sales': 'steps.background.placeholderByTargetJob.sales',
};

const PersonalBackground = () => {
  const { t } = useTranslation('onboarding');
  const { control, setValue } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
  });

  // TargetJob에 따른 placeholder 선택
  const placeholderKey = targetJob
    ? PLACEHOLDER_BY_TARGET_JOB_KEYS[targetJob]
    : undefined;
  const placeholder = placeholderKey ? t(placeholderKey) : '';

  const selectedStatus =
    useWatch({
      control,
      name: 'preparationStatuses',
    }) ?? [];

  const handleToggle = (status: string) => {
    const updated = selectedStatus?.includes(status)
      ? selectedStatus.filter((s) => s !== status)
      : [...selectedStatus, status];
    setValue('preparationStatuses', updated);
  };

  return (
    <section>
      <OnboardingStepTitle
        stepNumber={4}
        title={t('stepFlow.steps.background')}
      />
      <div className={styles.container}>
        <div className={styles.inputSection}>
          <h2 className={styles.title}>
            {t('steps.background.content.title')}
          </h2>
          <ul className={styles.infoList}>
            {[
              t('steps.background.info.privacy'),
              t('steps.background.info.referenceOnly'),
            ].map((message, index) => (
              <li key={index} className={styles.infoText}>
                {message}
              </li>
            ))}
          </ul>
          <FormTextareaField
            name="personalBackground"
            rules={{
              validate: (value) => {
                if (!value || value.trim().length === 0) {
                  return true;
                }
                return validateText(value, {
                  allowNumber: true,
                  allowBasicSpecialCharacters: true,
                });
              },
            }}
            placeholder={placeholder}
            maxLength={1000}
          />
        </div>
        <div className={styles.check({ area: 'container' })}>
          <span>{t('steps.background.preparationStatus.title')}</span>
          <div className={styles.check({ area: 'list' })}>
            {PREPARATION_STATUS_OPTIONS.map((status) => (
              <div
                key={status}
                className={styles.checkItem}
                onClick={() => handleToggle(status)}
              >
                <Checkbox isChecked={selectedStatus.includes(status)} />
                <span>{t(PREPARATION_STATUS_LABEL_KEYS[status])}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
