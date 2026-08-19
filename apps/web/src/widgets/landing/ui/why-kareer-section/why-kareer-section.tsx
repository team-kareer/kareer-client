import { useTranslation } from 'react-i18next';

import { bg_why_kareer } from '@shared/assets';

import * as styles from './why-kareer-section.css';

const BENEFITS = [
  { id: 'jobs', icon: '🎯' },
  { id: 'roadmap', icon: '🗺️' },
  { id: 'actions', icon: '✅' },
] as const;

const WhyKareerSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <img src={bg_why_kareer} alt="" className={styles.backgroundImage} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <h2 className={styles.title}>{t('whyKareer.title')}</h2>
        <p className={styles.description}>{t('whyKareer.description')}</p>

        <div className={styles.benefits}>
          {BENEFITS.map(({ id, icon }) => (
            <article key={id} className={styles.card}>
              <p className={styles.icon}>{icon}</p>
              <h3 className={styles.cardTitle}>
                {t(`whyKareer.benefits.${id}.title`)}
              </h3>
              <p className={styles.cardDescription}>
                {t(`whyKareer.benefits.${id}.description`)}
              </p>
            </article>
          ))}
        </div>

        <p className={styles.credit}>{t('whyKareer.credit')}</p>
      </div>
    </section>
  );
};

export default WhyKareerSection;
