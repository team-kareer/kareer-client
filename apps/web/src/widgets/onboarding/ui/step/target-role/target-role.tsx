import { Autocomplete, Checkbox } from '@kds/ui';

import { Controller, useWatch } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { type OnboardingForm } from '@entities/onboarding';

import * as styles from './target-role.css';
import { useFormContext } from 'react-hook-form';
import { TARGET_ROLE_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { JOB_SKILL_OPTIONS } from '@entities/onboarding';

const MAJOR_OPTIONS = [
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
];

const SECONDARY_MAJOR_OPTIONS = [
  'Software Engineer',
  'Data Scientist',
  'Product Manager',
  'Designer',
  'Other',
];

const TARGET_JOB_OPTIONS = [
  'Developer',
  'Data Analyst',
  'Marketer',
  'Business / Sales',
];

const TargetRole = () => {
  const {
    control,
    setValue,
    // formState: { errors },
  } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
    defaultValue: '',
  });

  const targetJobSkill = useWatch({
    control,
    name: 'targetJobSkill',
    defaultValue: '',
  });

  // 선택된 스킬들을 배열로 변환
  const selectedSkills = targetJobSkill
    ? targetJobSkill.split(',').filter(Boolean)
    : [];

  // 현재 직무에 해당하는 스킬 옵션들
  const currentJobSkills = targetJob ? JOB_SKILL_OPTIONS[targetJob] || [] : [];

  // 스킬 체크박스 토글
  const handleSkillToggle = (skillId: string) => {
    const isSelected = selectedSkills.includes(skillId);
    const newSkills = isSelected
      ? selectedSkills.filter((id) => id !== skillId)
      : [...selectedSkills, skillId];
    setValue('targetJobSkill', newSkills.join(','));
  };

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
              <>
                <Autocomplete
                  {...field}
                  placeholder={TARGET_ROLE_PLACEHOLDERS.PRIMARY_MAJOR}
                  options={MAJOR_OPTIONS}
                />
              </>
            )}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Secondary Major (Optional)</p>
          <Controller
            name="secondaryMajor"
            control={control}
            render={({ field }) => (
              <>
                <Autocomplete
                  {...field}
                  placeholder={TARGET_ROLE_PLACEHOLDERS.SECONDARY_MAJOR}
                  options={SECONDARY_MAJOR_OPTIONS}
                />
              </>
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
              <>
                <Autocomplete
                  {...field}
                  placeholder={TARGET_ROLE_PLACEHOLDERS.TARGET_JOB}
                  options={TARGET_JOB_OPTIONS}
                />
              </>
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
