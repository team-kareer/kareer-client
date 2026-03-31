import { useState } from 'react';
import { BangCircleIcon } from '@kds/icons';
import { Checkbox } from '@kds/ui';
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
import { FUNNEL_STEPS, type OnboardingForm } from '@entities/onboarding';
import { getPlaceholderByTargetJob } from '@entities/onboarding';

import * as styles from './personal-background.css';

const PREPARATION_STATUS_OPTIONS = [
  'I have already submitted job applications',
  'Currently working part-time or doing an internship',
  'Resume and portfolio are ready',
] as const;

const PersonalBackground = () => {
  // TODO: onboarding v2 post 전송값으로 변경
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const handleToggle = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

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
      <OnboardingStepTitle stepNumber={4} title={FUNNEL_STEPS[4]} />
      <div className={styles.container}>
        <div className={styles.inputSection}>
          <div>
            <h2 className={styles.title}>{PERSONAL_BACKGROUND_TITLE}</h2>
            <p className={styles.description}>
              {PERSONAL_BACKGROUND_DESCRIPTION}
            </p>
          </div>
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
            maxLength={1000}
          />
          <div className={styles.infoContainer}>
            {PERSONAL_BACKGROUND_INFO_MESSAGES.map((message, index) => (
              <div key={index} className={styles.intoText}>
                <span className={styles.iconWrapper}>
                  <BangCircleIcon width={24} height={24} />
                </span>
                <p className={styles.infoText}>{message}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.check({ area: 'container' })}>
          <span>Current Preparation Status</span>
          <div className={styles.check({ area: 'list' })}>
            {PREPARATION_STATUS_OPTIONS.map((status) => (
              <div
                key={status}
                className={styles.checkItem}
                onClick={() => handleToggle(status)}
              >
                <Checkbox isChecked={selectedStatus.includes(status)} />
                <span>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
