import { useState } from 'react';
import { Autocomplete, Input } from '@kds/ui';

import { OnboardingDegreeStep, OnboardingStepTitle } from '@widgets/onboarding';
import { validateDate } from '@features/onboarding/hooks/validators';

import * as styles from './personal-information.css';

const PLACEHOLDER = {
  NAME: 'Enter your name',
  DATE: 'Enter the Date',
  COUNTRY: 'Select the Country',
  OPIK_LEVEL: 'Select the level',
  DEGREE: 'Select the degree',
} as const;

const NON_BREAKING_SPACE = '\u00A0';

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
            placeholder={PLACEHOLDER.NAME}
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
            placeholder={PLACEHOLDER.DATE}
            value={dateOfBirth}
            onChange={handleDateChange}
            status={dateError ? 'error' : 'default'}
          />
          <p className={styles.errorMessage}>
            {dateError || NON_BREAKING_SPACE}
          </p>
        </div>
        {/* Country - 1열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Country</p>
          <Autocomplete
            placeholder={PLACEHOLDER.COUNTRY}
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        {/* 오픽 Level - 2열 */}
        <div className={styles.autoWrapper}>
          <p className={styles.label}>OPIK / KIIP Level</p>
          <Autocomplete
            placeholder={PLACEHOLDER.OPIK_LEVEL}
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
