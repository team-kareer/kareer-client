import { Tab } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import {
  VISA_CHECKLIST_D2,
  VISA_CHECKLIST_D10,
  VISA_CHECKLIST_E7,
  VisaChecklist,
  VisaTabList,
} from '@widgets/fit-analysis';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { formatDate } from '@shared/utils/date-formatter';

import * as styles from './visa-eligibility.css';

type VISA_TYPE = 'D2' | 'D10' | 'E7';

const VISA_TAB_PANELS = [
  { tab: 'D2', checklistData: VISA_CHECKLIST_D2 },
  { tab: 'D10', checklistData: VISA_CHECKLIST_D10 },
  { tab: 'E7', checklistData: VISA_CHECKLIST_E7 },
] as const;

const VisaEligibility = () => {
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_USER_STATUS() });

  let currentVisa: VISA_TYPE = 'D2';
  let rawDate = data?.visaExpiredAt;

  switch (data?.visaType) {
    case 'D10':
      currentVisa = 'D10';
      break;
    case 'E7':
      currentVisa = 'E7';
      rawDate = undefined;
      break;
    case 'D2':
    default:
      currentVisa = 'D2';
      break;
  }

  const formatData = {
    visa: currentVisa,
    date: formatDate(rawDate),
  };
  return (
    <Tab.Container initialValue={formatData.visa} className={styles.container}>
      <Tab.List className={styles.tabContainer}>
        <VisaTabList visa={formatData.visa} />
      </Tab.List>
      {VISA_TAB_PANELS.map(({ tab, checklistData }) => (
        <Tab.Panel key={tab} className={styles.panelContainer} tab={tab}>
          <VisaChecklist
            isCurrentVisa={formatData.visa === tab}
            curTab={tab}
            date={formatData.date}
            checklistData={checklistData}
          />
        </Tab.Panel>
      ))}
    </Tab.Container>
  );
};

export default VisaEligibility;
