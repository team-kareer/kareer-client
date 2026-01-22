import { Autocomplete, Input } from '@kds/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { VISA_INFORMATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { useVisaInformation } from '@features/onboarding/hooks/useVisaInformation';
import {
  validateDate,
  validateNumber,
  validateVisaExpirationDate,
  validateVisaIssuanceDate,
} from '@features/onboarding/hooks/validators';
import { type OnboardingForm } from '@entities/onboarding';
import { VISA_TYPE_OPTIONS } from '@entities/onboarding';

import * as styles from './visa-information.css';

const VisaInformation = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { visaType, visaStartDate } = useVisaInformation();
  const expectedGraduationDate = useWatch({
    control,
    name: 'expectedGraduationDate',
  });

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
              return (
                <Autocomplete
                  placeholder={VISA_INFORMATION_PLACEHOLDERS.CURRENT_VISA_TYPE}
                  value={field.value || ''}
                  onChange={(label) => {
                    // UI 값 그대로 저장
                    field.onChange(label);
                  }}
                  options={VISA_TYPE_OPTIONS}
                />
              );
            }}
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
                    if (!value) {
                      return 'Enter the graduation date';
                    }
                    const result = validateDate(value, true, false);
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
                if (!value) {
                  return 'Enter the issuance date';
                }
                // 기본 날짜 형식 체크 (미래/과거 날짜 모두 허용)
                const result = validateDate(value, true, true);
                if (result !== true) {
                  return result;
                }
                // D-2 비자 타입일 경우 졸업 예정일과 비교
                return validateVisaIssuanceDate(
                  value,
                  visaType,
                  expectedGraduationDate,
                );
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
        </div>{' '}
        <div>
          <p className={styles.label}>Visa Expiration Date (YYYY-MM-DD)</p>
          <Controller
            name="visaExpiredAt"
            control={control}
            rules={{
              validate: (value) => {
                // 값이 없으면 통과 (사용자가 입력할 때까지 대기)
                if (!value) {
                  return true;
                }
                // 완전한 형식(YYYY-MM-DD)이 아니면 통과 (입력 중)
                const completeFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!completeFormatRegex.test(value)) {
                  return true;
                }
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
