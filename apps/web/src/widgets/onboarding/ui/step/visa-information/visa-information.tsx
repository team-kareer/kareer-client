import { Autocomplete, Input } from '@kds/ui';
import { Controller, useFormContext } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { VISA_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { useVisaInformation } from '@features/onboarding/hooks/useVisaInformation';
import {
  validateDate,
  validateNumber,
  validateVisaExpirationDate,
} from '@features/onboarding/hooks/validators';
import { type OnboardingForm } from '@entities/onboarding';

import * as styles from './visa-information.css';

// 임시 옵션 데이터
const VISA_TYPE_OPTIONS = ['D-2', 'D-10'];

/**
 * 서버 값(하이픈 없음)을 UI 표시용 텍스트로 변환
 */
const getVisaTypeLabel = (value: string): string => {
  if (!value) {
    return '';
  }
  const visaTypeMap: Record<string, string> = {
    D2: 'D-2',
    D10: 'D-10',
  };
  return visaTypeMap[value] || value;
};

/**
 * UI 표시용 텍스트를 서버 값(하이픈 제거)으로 변환
 */
const getVisaTypeValue = (label: string): string => {
  const labelToValueMap: Record<string, string> = {
    'D-2': 'D2',
    'D-10': 'D10',
  };
  return labelToValueMap[label] || label.replace(/-/g, '');
};

const VisaInformation = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { visaType, visaStartDate } = useVisaInformation();

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
            render={({ field }) => {
              const displayValue = field.value
                ? getVisaTypeLabel(field.value)
                : '';

              return (
                <Autocomplete
                  placeholder={VISA_INFORMATION_PLACEHOLDERS.CURRENT_VISA_TYPE}
                  value={displayValue}
                  onChange={(label) => {
                    // UI 텍스트를 서버 값으로 변환하여 저장
                    const apiValue = getVisaTypeValue(label);
                    field.onChange(apiValue);
                  }}
                  options={VISA_TYPE_OPTIONS}
                />
              );
            }}
          />
        </div>
        {/* D-2 & D-10 비자 타입 조건부 렌더링 */}
        <div style={{ visibility: visaType ? 'visible' : 'hidden' }}>
          {visaType === 'D2' ? (
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
          ) : visaType === 'D10' ? (
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
