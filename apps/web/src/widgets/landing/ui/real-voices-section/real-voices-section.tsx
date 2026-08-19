import { useTranslation } from 'react-i18next';

import * as styles from './real-voices-section.css';

const VOICE_IDS = ['trade', 'resume', 'wechat'] as const;

const RealVoicesSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.label}>{t('voices.label')}</p>
        <h2 className={styles.title}>{t('voices.title')}</h2>

        <div className={styles.voices}>
          {VOICE_IDS.map((id) => (
            <article key={id} className={styles.card}>
              <p className={styles.icon}>💬</p>
              <p className={styles.quote}>{t(`voices.items.${id}.quote`)}</p>
              <p className={styles.meta}>{t(`voices.items.${id}.meta`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealVoicesSection;
