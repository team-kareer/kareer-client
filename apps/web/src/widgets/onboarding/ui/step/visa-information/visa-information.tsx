import { Autocomplete, Input } from '@kds/ui';

import { OnboardingStepTitle, type OnboardingForm } from '@widgets/onboarding';
import * as styles from './visa-information.css';
import { Controller, useFormContext } from 'react-hook-form';
import { validateDate } from '@features/onboarding/hooks/validators';

const PLACEHOLDER = {
  CURRENT_VISA_TYPE: 'Select the visa type',
  ISSUANCE_DATE: 'Enter the Date',
  GRADUATION_DATE: 'Enter the Date',
  EXPIRATION_DATE: 'Enter the Date',
};

// 임시 옵션 데이터
const VISA_TYPE_OPTIONS = ['D-2', 'D-10', 'E-7'];

const VisaInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<OnboardingForm>();

  return (
    <section>
      <OnboardingStepTitle stepNumber={2} title="Visa Information" />
      <div className={styles.inputContainer}>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Current Visa Type</p>
          <Controller
            name="visaType"
            control={control}
            rules={{ required: 'Select the visa type' }}
            render={({ field }) => (
              <Autocomplete
                placeholder={PLACEHOLDER.CURRENT_VISA_TYPE}
                value={field.value || ''}
                onChange={(value) => field.onChange(value)}
                options={VISA_TYPE_OPTIONS}
              />
            )}
          />
        </div>
        <div>
          <p className={styles.label}>Expected Graducation Date (YYYY.MM.DD)</p>
          <Controller
            name="expectedGraduationDate"
            control={control}
            rules={{
              required: 'Enter the graduation date',
              validate: (value) => {
                const result = validateDate(value);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={PLACEHOLDER.GRADUATION_DATE}
                  status={fieldState.error ? 'error' : 'default'}
                />
                <p className={styles.errorMessage}>
                  {fieldState.error?.message || ''}
                </p>
              </>
            )}
          />
        </div>
        <div>
          <p className={styles.label}>Visa Issuance Date (YYYY.MM.DD)</p>
          <Controller
            name="visaStartDate"
            control={control}
            rules={{
              required: 'Enter the issuance date',
              validate: (value) => {
                const result = validateDate(value);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={PLACEHOLDER.ISSUANCE_DATE}
                  status={fieldState.error ? 'error' : 'default'}
                />
                <p className={styles.errorMessage}>
                  {fieldState.error?.message || ''}
                </p>
              </>
            )}
          />
        </div>
        <div>
          <p className={styles.label}>Visa Expiration Date (YYYY.MM.DD)</p>
          <Controller
            name="visaExpiredAt"
            control={control}
            rules={{
              required: 'Enter the expiration date',
              validate: (value) => {
                const result = validateDate(value);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={PLACEHOLDER.EXPIRATION_DATE}
                  status={fieldState.error ? 'error' : 'default'}
                />
                <p className={styles.errorMessage}>
                  {fieldState.error?.message || ''}
                </p>
              </>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default VisaInformation;
