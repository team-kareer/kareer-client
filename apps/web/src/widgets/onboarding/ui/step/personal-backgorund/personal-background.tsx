import { BangCircleIcon } from '@kds/icons';
import { useFormContext, useWatch } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { FormTextareaField } from '@widgets/onboarding';
import {
  PERSONAL_BACKGROUND_DESCRIPTION,
  PERSONAL_BACKGROUND_INFO_MESSAGES,
  PERSONAL_BACKGROUND_TITLE,
} from '@widgets/onboarding/constants/personal-background';
import { PLACEHOLDER_BY_TARGET_JOB } from '@widgets/onboarding/constants/placeholders';
import { validateText } from '@features/onboarding/model/validation';
import { type OnboardingForm } from '@entities/onboarding';
import { getPlaceholderByTargetJob } from '@entities/onboarding';

import * as styles from './personal-background.css';

const PersonalBackground = () => {
  const { control } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
  });

  // TargetJob에 따른 placeholder 선택
  const placeholder = getPlaceholderByTargetJob(
    targetJob,
    PLACEHOLDER_BY_TARGET_JOB,
  );

  return (
    <section>
      <OnboardingStepTitle stepNumber={4} title="Personal Background" />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{PERSONAL_BACKGROUND_TITLE}</h2>
          <p className={styles.description}>
            {PERSONAL_BACKGROUND_DESCRIPTION}
          </p>
        </div>
        <div className={styles.textAreaWrapper}>
          <FormTextareaField
            name="personalBackground"
            rules={{
              validate: (value) =>
                validateText(value, {
                  allowNumber: true,
                  allowBasicSpecialCharacters: true,
                }),
            }}
            placeholder={placeholder}
            showCount={true}
            maxLength={1000}
          />
        </div>
        <div className={styles.infoContainer}>
          {PERSONAL_BACKGROUND_INFO_MESSAGES.map((message, index) => (
            <div key={index} className={styles.intoText}>
              <span className={styles.iconWrapper}>
                <BangCircleIcon />
              </span>
              <p className={styles.infoText}>{message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
