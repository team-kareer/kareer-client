import { Checkbox } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { FormAutocompleteField, FormInputField } from '@widgets/onboarding';
import { TARGET_ROLE_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { useTargetJobSkills } from '@features/onboarding/hooks/useTargetJobSkills';
import {
  validateAutocompleteOption,
  validateText,
} from '@features/onboarding/model/validation';
import {
  FUNNEL_STEPS,
  MAJOR_LIST_QUERY_OPTIONS,
  TARGET_JOB_OPTIONS,
} from '@entities/onboarding';

import * as styles from './target-role.css';

const TargetRole = () => {
  const { data: majorList } = useQuery({
    ...MAJOR_LIST_QUERY_OPTIONS.GET_MAJOR_LIST(),
  });
  const { targetJob, selectedSkills, currentJobSkills, handleSkillToggle } =
    useTargetJobSkills();

  return (
    <section>
      <OnboardingStepTitle stepNumber={3} title={FUNNEL_STEPS[2]} />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="primaryMajor"
          label="Primary Major"
          rules={{
            required: 'Enter your major',
            validate: (value) =>
              validateAutocompleteOption(value, majorList?.majors || []),
          }}
          placeholder={TARGET_ROLE_PLACEHOLDERS.PRIMARY_MAJOR}
          options={majorList?.majors || []}
        />
        <FormInputField
          name="secondaryMajor"
          label="Secondary Major (Optional)"
          rules={{
            validate: (value) => validateText(value),
          }}
          placeholder={TARGET_ROLE_PLACEHOLDERS.SECONDARY_MAJOR}
        />
        <FormAutocompleteField
          name="targetJob"
          label="Target Job"
          rules={{
            required: 'Enter your job',
            validate: (value) =>
              validateAutocompleteOption(value, TARGET_JOB_OPTIONS),
          }}
          placeholder={TARGET_ROLE_PLACEHOLDERS.TARGET_JOB}
          options={TARGET_JOB_OPTIONS}
        />
      </div>
      {targetJob && (
        <div className={styles.checkboxContainer}>
          {currentJobSkills.map((skill) => (
            <div
              key={skill.id}
              className={styles.checkboxWrapper}
              onClick={() => handleSkillToggle(skill.id)}
            >
              <Checkbox
                isChecked={selectedSkills.includes(skill.id)}
                onChange={() => handleSkillToggle(skill.id)}
              />
              <div className={styles.checkboxContent}>
                <h3 className={styles.checkboxTitle}>{skill.title}</h3>
                <p className={styles.checkboxDescription}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TargetRole;
