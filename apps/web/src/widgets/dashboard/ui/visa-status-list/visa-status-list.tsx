import {
  DefaultStatusIcon,
  GraduationCountDownIcon,
  RemainingStayIcon,
} from '@kds/icons';

import { VisaStatusResponse } from '@entities/job/model/types';
import { VisaStatusCard } from '@entities/user';
import { getVisaStatusRenderData } from '@shared/utils/visa-status-mapper';

import * as styles from './visa-status-list.css';

const MOCK_DATA: VisaStatusResponse = {
  visaType: 'D10',
  visaExpiredAt: '2026-01-17',
  expectedGraduationDate: '2026-05-20',
  graduationDate: '2026-05-20',
};

export const VisaStatusList = () => {
  // 나중에 api 훅으로 교체 예정
  const data = MOCK_DATA;

  if (!data) {
    return null;
  }

  const uiProps = getVisaStatusRenderData(data);

  if (!uiProps) {
    return null;
  }

  const { currentVisa, graduation, remaining } = uiProps;

  return (
    <div className={styles.container}>
      <VisaStatusCard icon={<DefaultStatusIcon />} {...currentVisa} />

      {data.visaType === 'D2' ? (
        <VisaStatusCard icon={<GraduationCountDownIcon />} {...graduation} />
      ) : (
        <VisaStatusCard icon={<RemainingStayIcon />} {...remaining} />
      )}
    </div>
  );
};

export default VisaStatusList;
