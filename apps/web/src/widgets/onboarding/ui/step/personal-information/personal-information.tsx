import { ReactNode, useState } from 'react';
import { Autocomplete, Button, Input, Tab, useTabContext } from '@kds/ui';

import { OnboardingStepTitle } from '@widgets/onboarding';
import {
  validateDate,
  validateName,
} from '@features/onboarding/hooks/validators';

import * as styles from './personal-information.css';

const PersonalInformation = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    const result = validateName(value);
    setNameError(result === true ? '' : result);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateOfBirth(value);
    const result = validateDate(value);
    setDateError(result === true ? '' : result);
  };
  const DegreeLocationButton = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => {
    const { selectedTab, setSelectedTab } = useTabContext();
    return (
      <Button
        preset={selectedTab === value ? 'mini_primary' : 'mini_outlined'}
        onClick={() => setSelectedTab(value)}
      >
        {children}
      </Button>
    );
  };
  return (
    <section>
      <div className={styles.contentTitleWrapper}>
        <OnboardingStepTitle stepNumber={1} title="Personal Information" />
      </div>
      <div className={styles.inputContainer}>
        {/* Name - 1열 */}
        <div className={`${styles.infoWrapperCol1}`}>
          <p className={styles.label}>Name</p>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            status={nameError ? 'error' : 'default'}
          />
          <p className={styles.errorMessage}>{nameError || '\u00A0'}</p>
        </div>
        {/* Date - 2열 */}
        <div className={` ${styles.infoWrapperCol2}`}>
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
        <div className={`${styles.autoWrapper} ${styles.infoWrapperCol1}`}>
          <p className={styles.label}>Country</p>
          <Autocomplete
            placeholder="Select the Country"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        {/* OPIK Level - 2열 */}
        <div className={`${styles.autoWrapper} ${styles.infoWrapperCol2}`}>
          <p className={styles.label}>OPIK / KIIP Level</p>
          <Autocomplete
            placeholder="Select the level"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        {/* Degree - 1열 */}
        <div className={`${styles.infoWrapperCol1}`}>
          <div className={styles.labelWrapper}>
            <p className={styles.label}>Degree</p>
            <p className={styles.subLabel}>Graduating students are included.</p>
          </div>
          <Tab.Container initialValue="south-korea">
            <Tab.List className={styles.buttonWrapper}>
              <DegreeLocationButton value="south-korea">
                <p>South Korea</p>
              </DegreeLocationButton>
              <DegreeLocationButton value="outside-korea">
                <p>Outside Korea</p>
              </DegreeLocationButton>
            </Tab.List>
            <Autocomplete
              placeholder="Select the degree"
              value={''}
              onChange={() => {}}
              options={[]}
            />
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
