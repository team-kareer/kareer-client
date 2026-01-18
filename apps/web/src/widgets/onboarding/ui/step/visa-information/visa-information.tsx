import { Autocomplete, Input } from '@kds/ui';

import { OnboardingStepTitle, type OnboardingForm } from '@widgets/onboarding';
import * as styles from './visa-information.css';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import {
  validateDate,
  validateNumber,
} from '@features/onboarding/hooks/validators';
import { useEffect, useRef } from 'react';

const PLACEHOLDER = {
  CURRENT_VISA_TYPE: 'Select the visa type',
  ISSUANCE_DATE: 'Enter the Date',
  GRADUATION_DATE: 'Enter the Date',
  EXPIRATION_DATE: 'Enter the Date',
  NUMBER: 'Enter the Number',
};

// 임시 옵션 데이터
const VISA_TYPE_OPTIONS = ['D-2', 'D-10'];

const VisaInformation = () => {
  const { control, resetField } = useFormContext<OnboardingForm>();

  const visaType = useWatch({
    control,
    name: 'visaType',
  });

  const prevVisaTypeRef = useRef<string | undefined>(visaType);

  // 비자 타입이 변경될 때 이전 타입의 필드 데이터 초기화
  useEffect(() => {
    const preVisaType = prevVisaTypeRef.current;
    if (preVisaType && preVisaType !== visaType) {
      if (visaType === 'D-2') {
        resetField('visaPoint');
      } else if (visaType === 'D-10') {
        resetField('expectedGraduationDate');
      }
    }
    prevVisaTypeRef.current = visaType;
  }, [visaType, resetField]);

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
        {/* D-2 & D-10 비자 타입 조건부 렌더링 */}
        <div style={{ visibility: visaType ? 'visible' : 'hidden' }}>
          {visaType === 'D-2' ? (
            <div>
              <p className={styles.label}>
                Expected Graducation Date (YYYY-MM-DD)
              </p>
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
          ) : visaType === 'D-10' ? (
            <div>
              <div>
                <p className={styles.label}>Visa Point</p>
                <Controller
                  name="visaPoint"
                  control={control}
                  rules={{
                    required: 'Enter the visa point',
                    validate: (value) => {
                      const result = validateNumber(String(value));
                      return result === true || result;
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input
                        {...field}
                        placeholder={PLACEHOLDER.NUMBER}
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
          ) : null}
        </div>
        <div>
          <p className={styles.label}>Visa Issuance Date (YYYY-MM-DD)</p>
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
          <p className={styles.label}>Visa Expiration Date (YYYY-MM-DD)</p>
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
