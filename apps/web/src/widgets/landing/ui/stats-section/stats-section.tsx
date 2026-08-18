import { useTranslation } from 'react-i18next';

import * as styles from './stats-section.css';

const StatsSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <p className={styles.label}>{t('stats.label')}</p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.value}>
            <span className={styles.accent}>77</span>%
          </p>
          <p className={styles.description}>
            {t('stats.descriptions.desiredEmployment')}
          </p>
        </div>

        <p className={styles.versus}>{t('stats.versus')}</p>

        <div className={styles.stat}>
          <p className={styles.value}>
            <span className={styles.accent}>7.7</span>%
          </p>
          <p className={styles.description}>
            {t('stats.descriptions.actualEmployment')}
          </p>
        </div>
      </div>

      <p className={styles.gap}>{t('stats.gap')}</p>
    </section>
  );
};

export default StatsSection;
