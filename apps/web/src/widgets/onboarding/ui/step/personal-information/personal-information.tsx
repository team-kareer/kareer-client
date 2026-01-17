import { useState } from 'react';
import { Autocomplete, Input } from '@kds/ui';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { validateDate } from '@features/onboarding/hooks/validators';

import * as styles from './personal-information.css';

const PersonalInformation = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateError, setDateError] = useState('');

  const MAX_LENGTH = 30;

  // input 유효성 검사 리뷰 제외!!
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setName(value);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateOfBirth(value);
    const result = validateDate(value);
    setDateError(result === true ? '' : result);
  };

  return (
    <section>
      <OnboardingStepTitle stepNumber={1} title="Personal Information" />
      <div className={styles.inputContainer}>
        {/* Name - 1열 */}
        <div>
          <p className={styles.label}>Name</p>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <div className={styles.textCount}>
            {name.length}/{MAX_LENGTH}
          </div>
        </div>
        {/* Date - 2열 */}
        <div>
          <p className={styles.label}>Date of Birth(YYYY.MM.DD)</p>
          <Input
            placeholder="Enter the Date"
            value={dateOfBirth}
            onChange={handleDateChange}
            status={dateError ? 'error' : 'default'}
          />
          <p className={styles.errorMessage}>{dateError || '\u00A0'}</p>
        </div>
        {/* Country - 1열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Country</p>
          <Autocomplete
            placeholder="Select the Country"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        {/* 오픽 Level - 2열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>OPIK / KIIP Level</p>
          <Autocomplete
            placeholder="Select the level"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        {/* Degree - 1열 */}
        <div>
          <div className={styles.labelWrapper}>
            <p className={styles.label}>Degree</p>
            <p className={styles.subLabel}>Graduating students are included.</p>
          </div>
          <OnboardingDegreeStep />
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
