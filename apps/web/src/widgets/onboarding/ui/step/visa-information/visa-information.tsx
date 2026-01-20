import { Autocomplete, Input } from '@kds/ui';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { type OnboardingForm } from '@entities/onboarding';
import * as styles from './visa-information.css';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import {
  validateDate,
  validateNumber,
  validateVisaExpirationDate,
} from '@features/onboarding/hooks/validators';
import { useEffect, useRef } from 'react';
import { VISA_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';

// 임시 옵션 데이터
const VISA_TYPE_OPTIONS = ['D-2', 'D-10'];

const VisaInformation = () => {
  const { control, resetField, trigger } = useFormContext<OnboardingForm>();

  const visaType = useWatch({
    control,
    name: 'visaType',
  });

  const visaStartDate = useWatch({
    control,
    name: 'visaStartDate',
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

  // 발급일이 완전히 입력되었을 때만 만료일 재검증
  useEffect(() => {
    // YYYY-MM-DD 형식이 완성되었을 때만 검증
    const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(visaStartDate || '');
    if (isValidDateFormat) {
      trigger('visaExpiredAt');
    }
  }, [visaStartDate, trigger]);

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
                placeholder={VISA_INFORMATION_PLACEHOLDERS.CURRENT_VISA_TYPE}
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
                    const result = validateDate(value, true); // 미래 날짜 허용
                    return result === true || result;
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      {...field}
                      placeholder={
                        VISA_INFORMATION_PLACEHOLDERS.GRADUATION_DATE
                      }
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
                        placeholder={VISA_INFORMATION_PLACEHOLDERS.NUMBER}
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
                const result = validateDate(value, true);
                return result === true || result;
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={VISA_INFORMATION_PLACEHOLDERS.ISSUANCE_DATE}
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
                // 기본 날짜 형식 체크
                const result = validateDate(value, true);
                if (result !== true) {
                  return result;
                }

                // 비자 만료일 검증
                return validateVisaExpirationDate(
                  value,
                  visaType,
                  visaStartDate,
                );
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  placeholder={VISA_INFORMATION_PLACEHOLDERS.EXPIRATION_DATE}
                  status={
                    fieldState.isTouched && fieldState.error
                      ? 'error'
                      : 'default'
                  }
                />
                <p className={styles.errorMessage}>
                  {fieldState.isTouched && fieldState.error?.message
                    ? fieldState.error.message
                    : ''}
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
