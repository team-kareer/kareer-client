import { ChangeEvent } from 'react';
import { BangCircleIcon } from '@kds/icons';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import {
  PERSONAL_BACKGROUND_DESCRIPTION,
  PERSONAL_BACKGROUND_INFO_MESSAGES,
  PERSONAL_BACKGROUND_TITLE,
} from '@widgets/onboarding/constants/personal-background';
import { PLACEHOLDER_BY_TARGET_JOB } from '@widgets/onboarding/constants/placeholders';
import { type OnboardingForm } from '@entities/onboarding';
import {
  FIELD_MAX_LENGTHS,
  getPlaceholderByTargetJob,
} from '@entities/onboarding';
import { TextField } from '@shared/ui/text-field/text-field';

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
          <Controller
            name="personalBackground"
            control={control}
            rules={{ required: 'Enter your personal background' }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder={placeholder}
                value={field.value || ''}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  const newValue = e.target.value;
                  if (
                    newValue.length <= FIELD_MAX_LENGTHS.PERSONAL_BACKGROUND
                  ) {
                    field.onChange(newValue);
                  }
                }}
                maxLength={FIELD_MAX_LENGTHS.PERSONAL_BACKGROUND}
                showCount={true}
              />
            )}
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
