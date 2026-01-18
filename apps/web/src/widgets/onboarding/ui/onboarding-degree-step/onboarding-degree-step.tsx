import { ReactNode } from 'react';
import { Autocomplete, Button, Tab, useTabContext } from '@kds/ui';

import * as styles from './onboarding-degree-step.css';

export const DegreeLocationButton = ({
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

const OnboardingDegreeStep = () => {
  return (
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
  );
};

export default OnboardingDegreeStep;
