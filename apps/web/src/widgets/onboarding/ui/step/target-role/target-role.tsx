import { Autocomplete } from '@kds/ui';

import { Controller } from 'react-hook-form';

import { OnboardingForm, OnboardingStepTitle } from '@widgets/onboarding';

import * as styles from './target-role.css';
import { useFormContext } from 'react-hook-form';

const PLACEHOLDER = {
  PRIMARY_MAJOR: 'Enter your major',
  SECONDARY_MAJOR: 'Enter your major',
  TARGET_JOB: 'Enter your job',
};

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
    // formState: { errors },
  } = useFormContext<OnboardingForm>();

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
                  placeholder={PLACEHOLDER.PRIMARY_MAJOR}
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
                  placeholder={PLACEHOLDER.SECONDARY_MAJOR}
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
                  placeholder={PLACEHOLDER.TARGET_JOB}
                  options={TARGET_JOB_OPTIONS}
                />
              </>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default TargetRole;
