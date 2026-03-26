import { useQuery } from '@tanstack/react-query';

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

const validateGraduationDate = (value: string) => {
  if (!value) {
    return 'Enter the graduation date';
  }
  return validateDate(value, {
    allowFuture: true,
    allowPast: false,
  });
};

const Education = () => {
  const { data: majorList } = useQuery({
    ...MAJOR_LIST_QUERY_OPTIONS.GET_MAJOR_LIST(),
  });

  const { data: universityList } = useQuery({
    ...UNIVERSITY_LIST_QUERY_OPTIONS.GET_UNIVERSITY_LIST(),
  });

  return (
    <section>
      <OnboardingStepTitle stepNumber={2} title={FUNNEL_STEPS[1]} />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="university"
          label="University / School"
          rules={{
            validate: (value) => validateText(value),
          }}
          placeholder={EDUCATION_PLACEHOLDERS.UNIVERSITY}
          options={universityList?.universities || []}
        />
        <div className={styles.newRow}>
          <FormAutocompleteField
            name="primaryMajor"
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
        <FormInputField
          name="expectedGraduationDate"
          label="Expected Graducation Date"
          rules={{
            required: 'Enter the graduation date',
            validate: validateGraduationDate,
          }}
          placeholder={EDUCATION_PLACEHOLDERS.GRADUATION_DATE}
        />
      </div>
    </section>
  );
};

export default Education;
