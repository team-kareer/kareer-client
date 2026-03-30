import { Button, useTabContext } from '@kds/ui';
import { useTranslation } from 'react-i18next';

interface VisaTabListProps {
  visa: string;
}

const PRESET_LIST = {
  active: 'mini_primary',
  inactive: 'mini_outlined',
} as const;

const VisaTabList = ({ visa }: VisaTabListProps) => {
  const { t } = useTranslation('fitAnalysis');
  const VISA_BUTTONS = [
    { label: 'D2', show: visa === 'D2' },
    { label: 'D10', show: true },
    { label: 'E7', show: true },
  ] as const;

  const { selectedTab, setSelectedTab } = useTabContext();
  const preset = (value: string) => {
    return selectedTab === value ? PRESET_LIST.active : PRESET_LIST.inactive;
  };

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
              {t(`visaEligibility.visaTabs.${label}`)}
            </Button>
          ),
      )}
    </>
  );
};

export default VisaTabList;
