import { useFormContext, useWatch } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { FormAutocompleteField, FormInputField } from '@widgets/onboarding';
import { VISA_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { type VisaType } from '@features/onboarding';
import { useVisaInformation } from '@features/onboarding/hooks/useVisaInformation';
import {
  validateAutocompleteOption,
  validateDate,
  validateExpirationDate,
  validateIssuanceDate,
  validateVisaPoint,
} from '@features/onboarding/model/validation';
import { type OnboardingForm } from '@entities/onboarding';
import { VISA_TYPE_OPTIONS } from '@entities/onboarding';

import * as styles from './visa-information.css';

const validateGraduationDate = (value: string) => {
  if (!value) {
    return 'Enter the graduation date';
  }
  return validateDate(value, {
    allowFuture: true,
    allowPast: false,
  });
};

const VisaInformation = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { visaType, visaStartDate } = useVisaInformation();
  const expectedGraduationDate = useWatch({
    control,
    name: 'expectedGraduationDate',
  });

  const validateIssuanceDateField = (value: string) => {
    if (!value) {
      return 'Enter the issuance date';
    }
    return validateIssuanceDate(
      value,
      visaType as 'D-2' | 'D-10',
      expectedGraduationDate,
    );
  };

  const validateExpirationDateField = (value: string) => {
    if (!value || !visaType) {
      return true;
    }
    return validateExpirationDate(
      value,
      visaStartDate || '',
      expectedGraduationDate || '',
      visaType as VisaType,
    );
  };

  return (
    <section>
      <OnboardingStepTitle stepNumber={2} title="Visa Information" />
      <div className={styles.inputContainer}>
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
        {/* D-2 & D-10 비자 타입 조건부 렌더링 */}
        <div style={{ visibility: visaType ? 'visible' : 'hidden' }}>
          {visaType === 'D-2' && (
            <FormInputField
              name="expectedGraduationDate"
              label="Expected Graducation Date (YYYY-MM-DD)"
              rules={{
                required: 'Enter the graduation date',
                validate: validateGraduationDate,
              }}
              placeholder={VISA_INFORMATION_PLACEHOLDERS.GRADUATION_DATE}
            />
          )}
          {visaType === 'D-10' && (
            <FormInputField
              name="visaPoint"
              label="Visa Point"
              type="number"
              rules={{
                required: 'Enter the visa point',
                validate: (value) => validateVisaPoint(String(value)),
              }}
              placeholder={VISA_INFORMATION_PLACEHOLDERS.NUMBER}
            />
          )}
        </div>
        <FormInputField
          name="visaStartDate"
          label="Visa Issuance Date (YYYY-MM-DD)"
          rules={{
            required: 'Enter the issuance date',
            validate: validateIssuanceDateField,
          }}
          placeholder={VISA_INFORMATION_PLACEHOLDERS.ISSUANCE_DATE}
        />
        <FormInputField
          name="visaExpiredAt"
          label="Visa Expiration Date (YYYY-MM-DD)"
          rules={{
            validate: validateExpirationDateField,
          }}
          placeholder={VISA_INFORMATION_PLACEHOLDERS.EXPIRATION_DATE}
        />
      </div>
    </section>
  );
};

export default VisaInformation;
