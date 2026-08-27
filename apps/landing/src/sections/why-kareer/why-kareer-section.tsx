import { bg_why_kareer } from '@assets/index';
import { CheckIcon, FitAnalysisIcon, RoadmapIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import BenefitCard from './benefit-card/benefit-card';

import * as styles from './why-kareer-section.css';

const BENEFITS = [
  {
    id: 'jobs',
    icon: <FitAnalysisIcon width={28} height={28} />,
  },
  {
    id: 'roadmap',
    icon: <RoadmapIcon width={28} height={28} />,
  },
  {
    id: 'actions',
    icon: <CheckIcon width={32} height={32} />,
  },
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
            <BenefitCard
              key={id}
              icon={icon}
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
