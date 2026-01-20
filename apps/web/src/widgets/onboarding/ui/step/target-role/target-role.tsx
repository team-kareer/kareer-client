import { Autocomplete, Checkbox, Input } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { Controller, useFormContext } from 'react-hook-form';

import { MAJOR_LIST_QUERY_OPTIONS } from '@entities/onboarding';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { TARGET_ROLE_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { useTargetJobSkills } from '@features/onboarding/hooks/useTargetJobSkills';
import { type OnboardingForm } from '@entities/onboarding';
import { TARGET_JOB_OPTIONS } from '@entities/onboarding';

import * as styles from './target-role.css';

const TargetRole = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { data: majorList } = useQuery({
    ...MAJOR_LIST_QUERY_OPTIONS.GET_MAJOR_LIST(),
  });
  const { targetJob, selectedSkills, currentJobSkills, handleSkillToggle } =
    useTargetJobSkills();

  return (
    <section>
      <OnboardingStepTitle stepNumber={3} title="Target Role" />
      <div className={styles.inputContainer}>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Primary Major</p>
          <Controller
            name="primaryMajor"
            control={control}
            rules={{ required: 'Enter your major' }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                placeholder={TARGET_ROLE_PLACEHOLDERS.PRIMARY_MAJOR}
                options={majorList?.majors || []}
              />
            )}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Secondary Major (Optional)</p>
          <Controller
            name="secondaryMajor"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={TARGET_ROLE_PLACEHOLDERS.SECONDARY_MAJOR}
              />
            )}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Target Job</p>
          <Controller
            name="targetJob"
            control={control}
            rules={{ required: 'Enter your job' }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                placeholder={TARGET_ROLE_PLACEHOLDERS.TARGET_JOB}
                options={TARGET_JOB_OPTIONS}
              />
            )}
          />
        </div>
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
