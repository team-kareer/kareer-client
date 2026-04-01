import { useQuery } from '@tanstack/react-query';

import {
  FormAutocompleteField,
  FormInputField,
  PERSONAL_INFORMATION_PLACEHOLDERS,
} from '@widgets/onboarding';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import { COUNTRY_LIST_QUERY_OPTIONS } from '@entities/onboarding';

import * as styles from './user-info-form-section.css';

const MAX_LENGTH = 20;

const UserInfoFormSection = () => {
  const { data: countryList } = useQuery({
    ...COUNTRY_LIST_QUERY_OPTIONS.GET_COUNTRY_LIST(),
  });

  return (
    <section className={styles.formSection}>
      <FormInputField
        name="name"
        label="Full Name"
        rules={{
          required: 'Please enter your name.',
          validate: (value) => validateText(value),
        }}
        placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.NAME}
        maxLength={MAX_LENGTH}
      />
      <FormAutocompleteField
        name="countryCode"
        label="Country"
        rules={{
          required: 'Select your country',
          validate: (value) =>
            validateAutocompleteOption(value, countryList?.countries || []),
        }}
        placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.COUNTRY}
        options={countryList?.countries || []}
      />
      <FormInputField
        name="birthDate"
        label="Date of Birth"
        rules={{
          required: 'Please enter your date of birth.',
          validate: (value) => validateDate(value, { allowPast: true }),
        }}
        placeholder={PERSONAL_INFORMATION_PLACEHOLDERS.DATE}
      />
    </section>
  );
};

export default UserInfoFormSection;
