import { Checkbox } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { FormAutocompleteField } from '@widgets/onboarding';
import { TARGET_ROLE_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { useTargetJobSkills } from '@features/onboarding/hooks/useTargetJobSkills';
import { validateAutocompleteOption } from '@features/onboarding/model/validation';
import { FUNNEL_STEPS, TARGET_JOB_OPTIONS } from '@entities/onboarding';
import { FIELD_LIST_QUERY_OPTIONS } from '@entities/onboarding/qureies/queries';

import * as styles from './career-preference.css';

const CareerPreference = () => {
  const { data: fieldList } = useQuery({
    ...FIELD_LIST_QUERY_OPTIONS.GET_FIELD_LIST(),
  });
  const { targetJob, selectedSkills, currentJobSkills, handleSkillToggle } =
    useTargetJobSkills();

  return (
    <section>
      <OnboardingStepTitle stepNumber={4} title={FUNNEL_STEPS[3]} />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="industryFieldOfInterest"
          label="Industry / Field of Interest"
          rules={{
            required: 'Search industries or fields',
            validate: (value) =>
              validateAutocompleteOption(value, fieldList?.fields || []),
          }}
          placeholder="Search industries or fields"
          options={fieldList?.fields || []}
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

export default CareerPreference;
