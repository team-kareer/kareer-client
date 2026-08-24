import Badge from '@components/badge/badge';
import EarlyAccessForm from '@components/early-access-form/early-access-form';
import {
  GlobalIcon,
  RoadmapIcon,
  SearchIcon,
  TimerIcon,
  XIcon,
} from '@kds/icons';
import { useTranslation } from 'react-i18next';

import PainPointItem from './pain-point-item/pain-point-item';

import * as styles from './hero-section.css';

const PAIN_POINTS = [
  { icon: XIcon, translationKey: 'hero.painPoints.visa' },
  { icon: RoadmapIcon, translationKey: 'hero.painPoints.e7' },
  { icon: SearchIcon, translationKey: 'hero.painPoints.job' },
  { icon: TimerIcon, translationKey: 'hero.painPoints.deadline' },
] as const;

const HeroSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <Badge
        icon={<GlobalIcon width={16} height={16} />}
        className={styles.badgeSpacing}
      >
        {t('hero.badge')}
      </Badge>

      <h1 className={styles.title}>
        {t('hero.title')}
        <br />
        <span className={styles.highlight}>{t('hero.highlight')}</span>
      </h1>

      <p className={styles.description}>{t('hero.description')}</p>

      <div className={styles.painPoints}>
        {PAIN_POINTS.map(({ icon: Icon, translationKey }) => (
          <PainPointItem
            key={translationKey}
            icon={
              <Icon width={18} height={18} className={styles.painPointIcon} />
            }
            label={t(translationKey)}
          />
        ))}
      </div>

      <p className={styles.solution}>{t('hero.solution')}</p>

      <EarlyAccessForm
        placeholder={t('hero.email.placeholder')}
        buttonLabel={t('hero.email.cta')}
        note={t('hero.email.note')}
      />
    </section>
  );
};

export default HeroSection;
