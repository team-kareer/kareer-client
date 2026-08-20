import { FitAnalysisIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import { Badge } from '@shared/ui';

import StatItem from './stat-item';
import useCountUpOnVisible from './use-count-up-on-visible';

import * as styles from './stats-section.css';

const DESIRED_EMPLOYMENT_RATE = 77;
const ACTUAL_EMPLOYMENT_RATE = 7.7;

const StatsSection = () => {
  const { t } = useTranslation('landing');
  const { containerRef, progress } = useCountUpOnVisible();

  const desiredEmploymentRate = Math.floor(DESIRED_EMPLOYMENT_RATE * progress);
  const actualEmploymentRate = (ACTUAL_EMPLOYMENT_RATE * progress).toFixed(1);

  return (
    <section ref={containerRef} className={styles.container}>
      <p className={styles.label}>{t('stats.label')}</p>

      <div className={styles.stats}>
        <StatItem
          value={desiredEmploymentRate}
          description={t('stats.descriptions.desiredEmployment')}
        />

        <p className={styles.versus}>{t('stats.versus')}</p>

        <StatItem
          value={actualEmploymentRate}
          description={t('stats.descriptions.actualEmployment')}
        />
      </div>

      <Badge
        tone="dark"
        icon={<FitAnalysisIcon width={16} height={16} />}
        className={styles.gapSpacing}
      >
        {t('stats.gap')}
      </Badge>
    </section>
  );
};

export default StatsSection;
