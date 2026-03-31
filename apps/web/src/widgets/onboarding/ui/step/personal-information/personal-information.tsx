import { useQuery } from '@tanstack/react-query';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { FormInputField } from '@widgets/onboarding';
import { FormAutocompleteField } from '@widgets/onboarding';
import { PERSONAL_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import {
  COUNTRY_LIST_QUERY_OPTIONS,
  FUNNEL_STEPS,
  toOptions,
} from '@entities/onboarding';
import { LANGUAGE_LEVEL_OPTIONS } from '@entities/onboarding';

import * as styles from './personal-information.css';

const MAX_LENGTH = 30;

const PersonalInformation = () => {
  const { data: countryList } = useQuery({
    ...COUNTRY_LIST_QUERY_OPTIONS.GET_COUNTRY_LIST(),
  });
  const countries =
    countryList?.countries?.map((country) => country.label ?? '') || [];

  return (
    <section>
      <OnboardingStepTitle stepNumber={1} title={FUNNEL_STEPS[0]} />
      <div className={styles.inputContainer}>
        <FormInputField
          name="name"
          label="Name"
          rules={{
            required: 'Enter your name',
            validate: (value) => validateText(value),
          }}
          placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.NAME}
          maxLength={MAX_LENGTH}
        />
        <FormInputField
          name="birthDate"
          label="Date of Birth(YYYY-MM-DD)"
          rules={{
            required: 'Enter the birth',
            validate: (value) => validateDate(value, { allowPast: true }),
          }}
          placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.DATE}
          maxLength={MAX_LENGTH}
        />
        <FormAutocompleteField
          name="country"
          label="Country"
          rules={{
            required: 'Select the Country',
            validate: (value) => validateAutocompleteOption(value, countries),
          }}
          placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.COUNTRY}
          options={countries}
        />
        <FormAutocompleteField
          name="languageLevel"
          label="TOPIK / KIIP Level"
          rules={{
            required: 'Select the level',
            validate: (value) =>
              validateAutocompleteOption(
                value,
                toOptions(LANGUAGE_LEVEL_OPTIONS),
              ),
          }}
          placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.OPIK_LEVEL}
          options={toOptions(LANGUAGE_LEVEL_OPTIONS)}
        />
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
