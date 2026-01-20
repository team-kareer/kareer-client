import {
  DefaultStatusIcon,
  GraduationCountDownIcon,
  RemainingStayIcon,
} from '@kds/icons';
import { useQuery } from '@tanstack/react-query';

import { VisaStatusCard } from '@entities/user';
import { USER_STATUS_QUERY_OPTIONS } from '@entities/user/queries/queries';
import { getVisaStatusRenderData } from '@shared/utils/visa-status-mapper';

import * as styles from './visa-status-list.css';

export const VisaStatusList = () => {
  const { data } = useQuery({ ...USER_STATUS_QUERY_OPTIONS.GET_USER_STATUS() });

  if (!data) {
    return null;
  }

  const renderData = getVisaStatusRenderData(data.data);

  if (!renderData) {
    return null;
  }

  const { currentVisa, graduation, remaining } = renderData;
  return (
    <div className={styles.container}>
      <VisaStatusCard icon={<DefaultStatusIcon />} {...currentVisa} />

      {data.data?.visaType === 'D2' ? (
        <VisaStatusCard icon={<GraduationCountDownIcon />} {...graduation} />
      ) : (
        <VisaStatusCard icon={<RemainingStayIcon />} {...remaining} />
      )}
    </div>
  );
};

export default VisaStatusList;
