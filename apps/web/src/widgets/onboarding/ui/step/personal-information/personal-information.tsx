import { ReactNode } from 'react';

import { Autocomplete, Button, Input, Tab, useTabContext } from '@kds/ui';

import { OnboardingStepTitle } from '@widgets/onboarding';

import * as styles from './personal-information.css';

const PersonalInformation = () => {
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
        <div className={styles.inputWrapper}>
          <p className={styles.label}>Name</p>
          <Input placeholder="Enter your name" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.label}>Date of Birth(YYYY.MM.DD)</p>
          <Input placeholder="Enter the Date" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <p className={styles.label}>Country</p>
          <Autocomplete
            placeholder="Select the Country"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.label}>OPIK / KIIP Level</p>
          <Autocomplete
            placeholder="Select the level"
            value={''}
            onChange={() => {}}
            options={[]}
          />
        </div>
        <div className={styles.inputWrapper}>
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
