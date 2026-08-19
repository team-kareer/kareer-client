import { CheckIcon, FitAnalysisIcon, RoadmapIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import { bg_why_kareer } from '@shared/assets';

import * as styles from './why-kareer-section.css';

const BENEFITS = [
  { id: 'jobs', icon: FitAnalysisIcon, iconSize: 28 },
  { id: 'roadmap', icon: RoadmapIcon, iconSize: 28 },
  { id: 'actions', icon: CheckIcon, iconSize: 32 },
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
          {BENEFITS.map(({ id, icon: Icon, iconSize }) => (
            <article key={id} className={styles.card}>
              <div className={styles.icon}>
                <Icon width={iconSize} height={iconSize} />
              </div>
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
