import {
  FormInputField,
  VISA_INFORMATION_PLACEHOLDERS,
} from '@widgets/onboarding';
import FormAutocompleteField from '@widgets/onboarding/ui/form-autocomplete-field/form-autocomplete-field';
import {
  validateAutocompleteOption,
  validateDate,
} from '@features/onboarding/model/validation';
import { VISA_TYPE_OPTIONS } from '@entities/onboarding';

import * as styles from './visa-info-form-section.css';

const VisaInfoFormSection = () => {
  return (
    <section className={styles.formSection}>
      <FormAutocompleteField
        name="visaType"
        label="Current Visa Type"
        rules={{
          required: 'Select the visa type',
          validate: (value) =>
            validateAutocompleteOption(value, VISA_TYPE_OPTIONS),
        }}
        placeholder={VISA_INFORMATION_PLACEHOLDERS.CURRENT_VISA_TYPE}
        options={VISA_TYPE_OPTIONS}
      />
      <FormInputField
        name="visaStartDate"
        label="Visa Start Date"
        rules={{
          required: 'Enter the visa start date',
          validate: (value) => validateDate(value, { allowPast: true }),
        }}
        placeholder={VISA_INFORMATION_PLACEHOLDERS.START_DATE}
      />
      <FormInputField
        name="visaExpiredAt"
        label="Visa Expiration Date"
        rules={{
          required: 'Enter the visa expiration date',
          validate: (value) => validateDate(value, { allowFuture: true }),
        }}
        placeholder={VISA_INFORMATION_PLACEHOLDERS.EXPIRATION_DATE}
      />
    </section>
  );
};

export default VisaInfoFormSection;
