import { Tab } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import {
  VISA_CHECKLIST_D2,
  VISA_CHECKLIST_D10,
  VISA_CHECKLIST_E7,
  VISA_LIST,
  VisaChecklist,
  VisaTabList,
} from '@widgets/fit-analysis';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { formatDate } from '@shared/utils/date-formatter';

import * as styles from './visa-eligibility.css';

const VISA_TAB_PANELS = [
  { tab: VISA_LIST.D2, checklistData: VISA_CHECKLIST_D2 },
  { tab: VISA_LIST.D10, checklistData: VISA_CHECKLIST_D10 },
  { tab: VISA_LIST.E7, checklistData: VISA_CHECKLIST_E7 },
] as const;

const VisaEligibility = () => {
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_USER_STATUS() });

  let currentVisa: (typeof VISA_LIST)[keyof typeof VISA_LIST] = VISA_LIST.D2;
  let rawDate = data?.visaExpiredAt;

  if (data?.visaType === 'D2') {
    currentVisa = VISA_LIST.D2;
    rawDate = data?.visaExpiredAt;
  } else if (data?.visaType === 'D10') {
    currentVisa = VISA_LIST.D10;
    rawDate = data?.visaExpiredAt;
  } else if (data?.visaType === 'E7') {
    currentVisa = VISA_LIST.E7;
    rawDate = undefined;
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
