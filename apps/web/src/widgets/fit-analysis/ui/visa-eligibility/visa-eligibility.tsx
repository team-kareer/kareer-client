import { Tab } from '@kds/ui';

import {
  VISA_CHECKLIST_D2,
  VISA_CHECKLIST_D10,
  VISA_CHECKLIST_E7,
  VISA_LIST,
  VisaChecklist,
  VisaTabList,
} from '@widgets/fit-analysis';

import * as styles from './visa-eligibility.css';

const VISA_TAB_PANELS = [
  { tab: VISA_LIST.D2, checklistData: VISA_CHECKLIST_D2 },
  { tab: VISA_LIST.D10, checklistData: VISA_CHECKLIST_D10 },
  { tab: VISA_LIST.E7, checklistData: VISA_CHECKLIST_E7 },
] as const;

const VisaEligibility = () => {
  const mockData = {
    visa: 'D-2 Student',
    date: 'Dec 10. 2026',
  };
  return (
    <Tab.Container initialValue={mockData.visa} className={styles.container}>
      <Tab.List className={styles.tabContainer}>
        <VisaTabList visa={mockData.visa} />
      </Tab.List>
      {VISA_TAB_PANELS.map(({ tab, checklistData }) => (
        <Tab.Panel key={tab} className={styles.panelContainer} tab={tab}>
          <VisaChecklist
            isCurrentVisa={mockData.visa === tab}
            curTab={tab}
            date={mockData.date}
            checklistData={checklistData}
          />
        </Tab.Panel>
      ))}
    </Tab.Container>
  );
};

export default VisaEligibility;
