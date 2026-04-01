import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { VisaStatusCard } from '@entities/user/ui';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from '@shared/i18n/constants';
import { getVisaStatusRenderData } from '@shared/utils/visa-status-mapper';

import * as styles from './visa-status-list.css';

export const VisaStatusList = () => {
  const { t, i18n } = useTranslation('userPopover');
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_USER_STATUS() });

  if (!data) {
    return null;
  }

  const resolvedLanguage = i18n.resolvedLanguage;
  const currentLanguage: SupportedLanguage =
    SUPPORTED_LANGUAGES.find((language) => language === resolvedLanguage) ??
    DEFAULT_LANGUAGE;

  const renderData = getVisaStatusRenderData(data, currentLanguage, t);
  if (!renderData) {
    return null;
  }

  const { currentVisa, graduation, remaining } = renderData;

  return (
    <div className={styles.container}>
      <VisaStatusCard {...currentVisa} />

      {data.visaType === 'D2' ? (
        <VisaStatusCard {...graduation} />
      ) : (
        <VisaStatusCard {...remaining} />
      )}
    </div>
  );
};

export default VisaStatusList;
