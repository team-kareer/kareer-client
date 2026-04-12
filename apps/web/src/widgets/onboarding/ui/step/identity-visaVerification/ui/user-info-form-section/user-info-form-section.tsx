import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { FormAutocompleteField, FormInputField } from '@widgets/onboarding';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import { COUNTRY_LIST_QUERY_OPTIONS } from '@entities/onboarding';

import * as styles from './user-info-form-section.css';

const MAX_LENGTH = 40;

const UserInfoFormSection = () => {
  const { t } = useTranslation('onboarding');
  const { data: countryList } = useQuery({
    ...COUNTRY_LIST_QUERY_OPTIONS.GET_COUNTRY_LIST(),
  });

  return (
    <section className={styles.formSection}>
      <FormInputField
        name="name"
        label={t('steps.identityVisaVerification.userInfo.name.label')}
        rules={{
          required: t('steps.identityVisaVerification.userInfo.name.required'),
          validate: (value) => validateText(value),
        }}
        placeholder={t(
          'steps.identityVisaVerification.userInfo.name.placeholder',
        )}
        maxLength={MAX_LENGTH}
      />
      <FormAutocompleteField
        name="countryCode"
        label={t('steps.identityVisaVerification.userInfo.country.label')}
        rules={{
          required: t(
            'steps.identityVisaVerification.userInfo.country.required',
          ),
          validate: (value) =>
            validateAutocompleteOption(value, countryList?.countries || []),
        }}
        placeholder={t(
          'steps.identityVisaVerification.userInfo.country.placeholder',
        )}
        options={countryList?.countries || []}
      />
      <FormInputField
        name="birthDate"
        label={t('steps.identityVisaVerification.userInfo.birthDate.label')}
        rules={{
          required: t(
            'steps.identityVisaVerification.userInfo.birthDate.required',
          ),
          validate: (value) => validateDate(value, { allowPast: true }),
        }}
        placeholder={t(
          'steps.identityVisaVerification.userInfo.birthDate.placeholder',
        )}
      />
    </section>
  );
};

export default UserInfoFormSection;
