import { useQuery } from '@tanstack/react-query';
import { useFormContext, useWatch } from 'react-hook-form';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { FormInputField } from '@widgets/onboarding';
import { FormAutocompleteField } from '@widgets/onboarding';
import { EDUCATION_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import {
  validateAutocompleteOption,
  validateDate,
  validateText,
} from '@features/onboarding/model/validation';
import {
  FUNNEL_STEPS,
  MAJOR_LIST_QUERY_OPTIONS,
  UNIVERSITY_LIST_QUERY_OPTIONS,
} from '@entities/onboarding';

import * as styles from './education.css';

const Education = () => {
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
      <OnboardingStepTitle stepNumber={2} title={FUNNEL_STEPS[1]} />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="universityCode"
          label="University / School"
          rules={{
            validate: (value) =>
              validateAutocompleteOption(
                value,
                universityList?.universities || [],
              ),
          }}
          placeholder={EDUCATION_PLACEHOLDERS.UNIVERSITY}
          options={universityList?.universities || []}
        />
        <div className={styles.newRow}>
          <FormAutocompleteField
            name="primaryMajorCode"
            label="Primary Major"
            rules={{
              required: 'Select your major',
              validate: (value) =>
                validateAutocompleteOption(value, majorList?.majors || []),
            }}
            placeholder={EDUCATION_PLACEHOLDERS.MAJOR}
            options={majorList?.majors || []}
          />
        </div>
        <FormInputField
          name="secondaryMajor"
          label="Secondary Major (Optional)"
          rules={{
            validate: (value) => validateText(value),
          }}
          placeholder={EDUCATION_PLACEHOLDERS.MAJOR}
        />
        <div>
          <div className={styles.labelWrapper}>
            <p className={styles.label}>Degree</p>
            <p className={styles.subLabel}>Graduating students are included.</p>
          </div>
          <OnboardingDegreeStep />
        </div>
        {visaType === 'D-2' && (
          <FormInputField
            name="expectedGraduationDate"
            label="Expected Graducation Date"
            rules={{
              required: 'Enter the graduation date',
              validate: (value) =>
                validateDate(value, {
                  allowFuture: true,
                  allowPast: false,
                }),
            }}
            placeholder={EDUCATION_PLACEHOLDERS.GRADUATION_DATE}
          />
        )}
        {visaType === 'D-10' && (
          <FormInputField
            name="GraduationDate"
            label="Graducation Date"
            rules={{
              required: 'Enter the graduation date',
              validate: (value) =>
                validateDate(value, {
                  allowFuture: false,
                  allowPast: true,
                }),
            }}
            placeholder={EDUCATION_PLACEHOLDERS.GRADUATION_DATE}
          />
        )}
      </div>
    </section>
  );
};

export default Education;
