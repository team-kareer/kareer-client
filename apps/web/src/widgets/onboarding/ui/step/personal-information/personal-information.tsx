import { Autocomplete, Input } from '@kds/ui';

import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { type OnboardingForm } from '@widgets/onboarding';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import {
  validateDate,
  validateName,
} from '@features/onboarding/hooks/validators';

import * as styles from './personal-information.css';

const PLACEHOLDER = {
  NAME: 'Enter your name',
  DATE: 'Enter the Date',
  COUNTRY: 'Select the Country',
  OPIK_LEVEL: 'Select the level',
  DEGREE: 'Select the degree',
} as const;

const NON_BREAKING_SPACE = '\u00A0';

// 임시 옵션 데이터
const COUNTRY_OPTIONS = [
  'South Korea',
  'United Kingdom',
  'United States',
  'Japan',
];

const LANGUAGE_LEVEL_OPTIONS = [
  'LEVEL_1',
  'LEVEL_2',
  'LEVEL_3',
  'LEVEL_4',
  'LEVEL_5',
  'Not taken yet',
];

const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<OnboardingForm>();

  const nameValue = useWatch({
    control,
    name: 'name',
    defaultValue: '',
  });

  const MAX_LENGTH = 30;

  return (
    <section>
      <OnboardingStepTitle stepNumber={1} title="Personal Information" />
      <div className={styles.inputContainer}>
        {/* Name - 1열 */}
        <div>
          <p className={styles.label}>Name</p>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Enter your name',
              validate: (value) => {
                const result = validateName(value);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  maxLength={MAX_LENGTH}
                  status={fieldState.error ? 'error' : 'default'}
                  placeholder={PLACEHOLDER.NAME}
                />
                <p className={styles.textCount}>
                  {nameValue?.length || 0}/{MAX_LENGTH}
                </p>
              </>
            )}
          />
        </div>
        {/* Date - 2열 */}
        <div>
          <p className={styles.label}>Date of Birth(YYYY-MM-DD)</p>
          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: 'Enter the birth',
              validate: (value) => {
                const result = validateDate(value);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={PLACEHOLDER.DATE}
                  status={fieldState.error ? 'error' : 'default'}
                />
                <p className={styles.errorMessage}>
                  {fieldState.error?.message || NON_BREAKING_SPACE}
                </p>
              </>
            )}
          />
        </div>
        {/* Country - 1열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Country</p>
          <Controller
            name="country"
            control={control}
            rules={{ required: 'Select the Country' }}
            render={({ field }) => (
              <Autocomplete
                placeholder={PLACEHOLDER.COUNTRY}
                value={field.value || ''}
                onChange={(value) => field.onChange(value)}
                options={COUNTRY_OPTIONS}
              />
            )}
          />
        </div>
        {/* 오픽 Level - 2열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>OPIK / KIIP Level</p>
          <Controller
            name="languageLevel"
            control={control}
            rules={{ required: 'Select the level' }}
            render={({ field }) => (
              <Autocomplete
                placeholder={PLACEHOLDER.OPIK_LEVEL}
                value={field.value || ''}
                onChange={(value) => field.onChange(value)}
                options={LANGUAGE_LEVEL_OPTIONS}
              />
            )}
          />
        </div>
        {/* Degree - 1열 */}
        <div>
          <div className={styles.labelWrapper}>
            <p className={styles.label}>Degree</p>
            <p className={styles.subLabel}>Graduating students are included.</p>
          </div>
          <OnboardingDegreeStep />
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
