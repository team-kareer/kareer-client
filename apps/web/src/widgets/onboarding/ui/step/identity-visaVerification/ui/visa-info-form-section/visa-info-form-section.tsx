import { Autocomplete } from '@kds/ui';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormField, FormInputField } from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';
import {
  validateAutocompleteOption,
  validateIdentityVisaExpirationDate,
  validateIdentityVisaStartDate,
} from '@features/onboarding/model/validation';
import { type OnboardingForm, VISA_TYPE_OPTIONS } from '@entities/onboarding';

import * as styles from './visa-info-form-section.css';

const VisaInfoFormSection = () => {
  const { t } = useTranslation('onboarding');
  const { control } = useFormContext<OnboardingForm>();
  const visaType = useWatch({ control, name: 'visaType' });
  const visaStartDate = useWatch({ control, name: 'visaStartDate' });
  const visaExpiredAt = useWatch({ control, name: 'visaExpiredAt' });
  const visaTypeOptions = VISA_TYPE_OPTIONS.map((option) => ({
    code: option,
    label:
      option === 'D-2' ? t('options.visaType.d2') : t('options.visaType.d10'),
  }));

  return (
    <section className={styles.formSection}>
      <FormField
        name="visaType"
        label={t('steps.identityVisaVerification.visaInfo.visaType.label')}
        rules={{
          required: t(
            'steps.identityVisaVerification.visaInfo.visaType.required',
          ),
          validate: (value) =>
            validateAutocompleteOption(value, visaTypeOptions),
        }}
      >
        {(field) => (
          <Autocomplete
            placeholder={t(
              'steps.identityVisaVerification.visaInfo.visaType.placeholder',
            )}
            options={visaTypeOptions}
            onChange={field.onChange}
            value={field.value ?? ''}
          />
        )}
      </FormField>
      <FormInputField
        name="visaStartDate"
        label={t('steps.identityVisaVerification.visaInfo.visaStartDate.label')}
        rules={{
          required: t(
            'steps.identityVisaVerification.visaInfo.visaStartDate.required',
          ),
          validate: (value) =>
            validateIdentityVisaStartDate(value, visaExpiredAt),
        }}
        placeholder={t(
          'steps.identityVisaVerification.visaInfo.visaStartDate.placeholder',
        )}
      />
      <FormInputField
        name="visaExpiredAt"
        label={t('steps.identityVisaVerification.visaInfo.visaExpiredAt.label')}
        rules={{
          required: t(
            'steps.identityVisaVerification.visaInfo.visaExpiredAt.required',
          ),
          validate: (value) =>
            validateIdentityVisaExpirationDate(
              value,
              visaType as VisaType | undefined,
              visaStartDate,
            ),
        }}
        placeholder={t(
          'steps.identityVisaVerification.visaInfo.visaExpiredAt.placeholder',
        )}
      />
    </section>
  );
};

export default VisaInfoFormSection;
