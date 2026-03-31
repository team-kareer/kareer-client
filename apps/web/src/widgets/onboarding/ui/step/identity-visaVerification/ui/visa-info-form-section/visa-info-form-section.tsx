import { Autocomplete } from '@kds/ui';
import { useFormContext, useWatch } from 'react-hook-form';

import {
  FormField,
  FormInputField,
  VISA_INFORMATION_PLACEHOLDERS,
} from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';
import {
  validateAutocompleteOption,
  validateIdentityVisaExpirationDate,
  validateIdentityVisaStartDate,
} from '@features/onboarding/model/validation';
import {
  type OnboardingForm,
  VISA_TYPE_LABELS,
  VISA_TYPE_OPTIONS,
} from '@entities/onboarding';

import * as styles from './visa-info-form-section.css';

const VisaInfoFormSection = () => {
  const { control } = useFormContext<OnboardingForm>();
  const visaType = useWatch({ control, name: 'visaType' });
  const visaStartDate = useWatch({ control, name: 'visaStartDate' });
  const visaExpiredAt = useWatch({ control, name: 'visaExpiredAt' });

  return (
    <section className={styles.formSection}>
      <FormField
        name="visaType"
        label="Current Visa Type"
        rules={{
          required: 'Select the visa type',
          validate: (value) =>
            validateAutocompleteOption(
              value,
              VISA_TYPE_OPTIONS.map((option) => ({
                code: option,
                label: VISA_TYPE_LABELS[option] ?? option,
              })),
            ),
        }}
      >
        {(field) => (
          <Autocomplete
            placeholder={VISA_INFORMATION_PLACEHOLDERS.CURRENT_VISA_TYPE}
            options={VISA_TYPE_OPTIONS.map((option) => ({
              code: option,
              label: VISA_TYPE_LABELS[option] ?? option,
            }))}
            onChange={field.onChange}
            value={field.value ?? ''}
          />
        )}
      </FormField>
      <FormInputField
        name="visaStartDate"
        label="Visa Start Date"
        rules={{
          required: 'Enter the visa start date',
          validate: (value) =>
            validateIdentityVisaStartDate(value, visaExpiredAt),
        }}
        placeholder={VISA_INFORMATION_PLACEHOLDERS.START_DATE}
      />
      <FormInputField
        name="visaExpiredAt"
        label="Visa Expiration Date"
        rules={{
          required: 'Enter the visa expiration date',
          validate: (value) =>
            validateIdentityVisaExpirationDate(
              value,
              visaType as VisaType | undefined,
              visaStartDate,
            ),
        }}
        placeholder={VISA_INFORMATION_PLACEHOLDERS.EXPIRATION_DATE}
      />
    </section>
  );
};

export default VisaInfoFormSection;
