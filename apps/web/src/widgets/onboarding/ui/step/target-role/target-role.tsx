import { useState } from 'react';
import { Autocomplete } from '@kds/ui';

import { OnboardingStepTitle } from '@widgets/onboarding';

import * as styles from './target-role.css';

const TargetRole = () => {
  const [primaryMajor, setPrimaryMajor] = useState('');
  const [secondaryMajor, setSecondaryMajor] = useState('');
  const [targetJob, setTargetJob] = useState('');

  return (
    <section>
      <OnboardingStepTitle stepNumber={3} title="Target Role" />
      <div className={styles.inputContainer}>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Primary Major</p>
          <Autocomplete
            value={primaryMajor}
            onChange={(value) => setPrimaryMajor(value)}
            options={[]}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Secondary Major (Optional)</p>
          <Autocomplete
            value={secondaryMajor}
            onChange={(value) => setSecondaryMajor(value)}
            options={[]}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Target Job</p>
          <Autocomplete
            value={targetJob}
            onChange={(value) => setTargetJob(value)}
            options={[]}
          />
        </div>
      </div>
    </section>
  );
};

export default TargetRole;
