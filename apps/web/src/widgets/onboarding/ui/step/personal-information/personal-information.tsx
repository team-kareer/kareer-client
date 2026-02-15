import { Autocomplete, Input } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { PERSONAL_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import { COUNTRY_LIST_QUERY_OPTIONS } from '@entities/onboarding';
import { LANGUAGE_LEVEL_OPTIONS } from '@entities/onboarding';
import { FormField } from '@shared/ui';

import * as styles from './personal-information.css';

const PersonalInformation = () => {
  const { data: countryList } = useQuery({
    ...COUNTRY_LIST_QUERY_OPTIONS.GET_COUNTRY_LIST(),
  });

  const MAX_LENGTH = 30;

  return (
    <section>
      <OnboardingStepTitle stepNumber={1} title="Personal Information" />
      <div className={styles.inputContainer}>
        <FormField
          name="name"
          label="Name"
          rules={{
            required: 'Enter your name',
            validate: (value) => validateText(value),
          }}
        >
          {(field, fieldState) => (
            <Input
              {...field}
              maxLength={MAX_LENGTH}
              placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.NAME}
              status={fieldState.error ? 'error' : 'default'}
            />
          )}
        </FormField>
        <FormField
          name="birthDate"
          label="Date of Birth(YYYY-MM-DD)"
          rules={{
            required: 'Enter the birth',
            validate: (value) => validateDate(value, { allowPast: true }),
          }}
        >
          {(field, fieldState) => (
            <Input
              {...field}
              placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.DATE}
              status={fieldState.error ? 'error' : 'default'}
            />
          )}
        </FormField>
        <FormField
          name="country"
          label="Country"
          rules={{
            required: 'Select the Country',
            validate: (value) =>
              validateAutocompleteOption(value, countryList?.countries || []),
          }}
        >
          {(field) => (
            <Autocomplete
              placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.COUNTRY}
              value={field.value || ''}
              onChange={(value) => field.onChange(value)}
              options={countryList?.countries || []}
            />
          )}
        </FormField>
        <FormField
          name="languageLevel"
          label="TOPIK / KIIP Level"
          rules={{
            required: 'Select the level',
            validate: (value) =>
              validateAutocompleteOption(value, LANGUAGE_LEVEL_OPTIONS),
          }}
        >
          {(field) => (
            <Autocomplete
              placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.OPIK_LEVEL}
              value={field.value || ''}
              onChange={(value) => field.onChange(value)}
              options={LANGUAGE_LEVEL_OPTIONS}
            />
          )}
        </FormField>
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
