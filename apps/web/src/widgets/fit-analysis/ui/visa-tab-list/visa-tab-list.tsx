import { Button, useTabContext } from '@kds/ui';

const VISA_LIST = {
  D2: 'D-2 Student',
  D10: 'D-10 Job Seeker',
  E7: 'E-7 Foreign National of Special Ability',
} as const;

const PRESET_LIST = {
  active: 'mini_primary',
  inactive: 'mini_outlined',
} as const;

interface VisaTabListProps {
  visa: string;
}

const VisaTabList = ({ visa }: VisaTabListProps) => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const isD2 = visa === VISA_LIST.D2;
  const preset = (value: string) => {
    return selectedTab === value ? PRESET_LIST.active : PRESET_LIST.inactive;
  };

  return (
    <>
      {isD2 && (
        <Button
          preset={preset(VISA_LIST.D2)}
          onClick={() => setSelectedTab(VISA_LIST.D2)}
        >
          {VISA_LIST.D2}
        </Button>
      )}
      <Button
        preset={preset(VISA_LIST.D10)}
        onClick={() => setSelectedTab(VISA_LIST.D10)}
      >
        {VISA_LIST.D10}
      </Button>
      <Button
        preset={preset(VISA_LIST.E7)}
        onClick={() => setSelectedTab(VISA_LIST.E7)}
      >
        {VISA_LIST.E7}
      </Button>
    </>
  );
};

export default VisaTabList;
