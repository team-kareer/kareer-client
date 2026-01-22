import { Autocomplete, Input } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { Controller, useFormContext } from 'react-hook-form';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { PERSONAL_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import {
  validateDate,
  validateName,
} from '@features/onboarding/hooks/validators';
import {
  COUNTRY_LIST_QUERY_OPTIONS,
  type OnboardingForm,
} from '@entities/onboarding';
import { LANGUAGE_LEVEL_OPTIONS } from '@entities/onboarding';

import * as styles from './personal-information.css';

const NON_BREAKING_SPACE = '\u00A0';

const PersonalInformation = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { data: countryList } = useQuery({
    ...COUNTRY_LIST_QUERY_OPTIONS.GET_COUNTRY_LIST(),
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
                  placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.NAME}
                />
                <p className={styles.textCount}>
                  {field.value?.length || 0}/{MAX_LENGTH}
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
                const result = validateDate(value, false, true);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.DATE}
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
                placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.COUNTRY}
                value={field.value || ''}
                onChange={(value) => field.onChange(value)}
                options={countryList?.countries || []}
              />
            )}
          />
        </div>
        {/* 오픽 Level - 2열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>TOPIK / KIIP Level</p>
          <Controller
            name="languageLevel"
            control={control}
            rules={{ required: 'Select the level' }}
            render={({ field }) => (
              <Autocomplete
                placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.OPIK_LEVEL}
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
