import { CheckIcon, FitAnalysisIcon, RoadmapIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import { bg_why_kareer } from '@shared/assets';

import BenefitCard from './benefit-card/benefit-card';

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
            <BenefitCard
              key={id}
              icon={<Icon width={iconSize} height={iconSize} />}
              title={t(`whyKareer.benefits.${id}.title`)}
              description={t(`whyKareer.benefits.${id}.description`)}
            />
          ))}
        </div>

        <p className={styles.credit}>{t('whyKareer.credit')}</p>
      </div>
    </section>
  );
};

export default WhyKareerSection;
