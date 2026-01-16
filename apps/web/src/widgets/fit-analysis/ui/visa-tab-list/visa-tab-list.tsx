import { Button, useTabContext } from '@kds/ui';

import { VISA_LIST } from '@widgets/fit-analysis';

interface VisaTabListProps {
  visa: string;
}

const PRESET_LIST = {
  active: 'mini_primary',
  inactive: 'mini_outlined',
} as const;

const VisaTabList = ({ visa }: VisaTabListProps) => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const isD2 = visa === VISA_LIST.D2;
  const preset = (value: string) => {
    return selectedTab === value ? PRESET_LIST.active : PRESET_LIST.inactive;
  };

  const VISA_BUTTONS = [
    { label: VISA_LIST.D2, show: isD2 },
    { label: VISA_LIST.D10, show: true },
    { label: VISA_LIST.E7, show: true },
  ] as const;

  return (
    <>
      {VISA_BUTTONS.map(
        ({ label, show }) =>
          show && (
            <Button
              key={label}
              preset={preset(label)}
              onClick={() => setSelectedTab(label)}
            >
              {label}
            </Button>
          ),
      )}
    </>
  );
};

export default VisaTabList;
