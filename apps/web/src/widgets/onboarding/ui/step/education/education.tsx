import { useQuery } from '@tanstack/react-query';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { FormInputField } from '@widgets/onboarding';
import { FormAutocompleteField } from '@widgets/onboarding';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import {
  MAJOR_LIST_QUERY_OPTIONS,
  UNIVERSITY_LIST_QUERY_OPTIONS,
} from '@entities/onboarding';

import * as styles from './education.css';

const Education = () => {
  const { t } = useTranslation('onboarding');
  const { data: majorList } = useQuery({
    ...MAJOR_LIST_QUERY_OPTIONS.GET_MAJOR_LIST(),
  });

  const { data: universityList } = useQuery({
    ...UNIVERSITY_LIST_QUERY_OPTIONS.GET_UNIVERSITY_LIST(),
  });

  const { control } = useFormContext();
  const visaType = useWatch({ control, name: 'visaType' });
  return (
    <section>
      <OnboardingStepTitle
        stepNumber={2}
        title={t('stepFlow.steps.education')}
      />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="universityCode"
          label={t('steps.education.fields.university.label')}
          rules={{
            validate: (value) =>
              validateAutocompleteOption(
                value,
                universityList?.universities || [],
              ),
          }}
          placeholder={t('steps.education.fields.university.placeholder')}
          options={universityList?.universities || []}
        />
        <div className={styles.newRow}>
          <FormAutocompleteField
            name="primaryMajorCode"
            label={t('steps.education.fields.primaryMajor.label')}
            rules={{
              required: t('steps.education.fields.primaryMajor.required'),
              validate: (value) =>
                validateAutocompleteOption(value, majorList?.majors || []),
            }}
            placeholder={t('steps.education.fields.primaryMajor.placeholder')}
            options={majorList?.majors || []}
          />
        </div>
        <FormInputField
          name="secondaryMajor"
          label={t('steps.education.fields.secondaryMajor.label')}
          rules={{
            validate: (value) => validateText(value),
          }}
          placeholder={t('steps.education.fields.secondaryMajor.placeholder')}
        />
        <div>
          <div className={styles.labelWrapper}>
            <p className={styles.label}>
              {t('steps.education.section.degreeLabel')}
            </p>
            <p className={styles.subLabel}>
              {t('steps.education.section.degreeDescription')}
            </p>
          </div>
          <OnboardingDegreeStep />
        </div>
        {visaType === 'D-2' && (
          <FormInputField
            name="expectedGraduationDate"
            label={t('steps.education.fields.expectedGraduationDate.label')}
            rules={{
              required: t(
                'steps.education.fields.expectedGraduationDate.required',
              ),
              validate: (value) =>
                validateDate(value, {
                  allowFuture: true,
                  allowPast: false,
                }),
            }}
            placeholder={t(
              'steps.education.fields.expectedGraduationDate.placeholder',
            )}
          />
        )}
        {visaType === 'D-10' && (
          <FormInputField
            name="expectedGraduationDate"
            label={t('steps.education.fields.graduationDate.label')}
            rules={{
              required: t('steps.education.fields.graduationDate.required'),
              validate: (value) =>
                validateDate(value, {
                  allowFuture: false,
                  allowPast: true,
                }),
            }}
            placeholder={t('steps.education.fields.graduationDate.placeholder')}
          />
        )}
      </div>
    </section>
  );
};

export default Education;
