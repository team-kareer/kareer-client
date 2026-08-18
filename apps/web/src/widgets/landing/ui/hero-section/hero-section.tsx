import { Button, Input } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import * as styles from './hero-section.css';

const PAIN_POINTS = [
  { emoji: '😮‍💨', translationKey: 'hero.painPoints.visa' },
  { emoji: '🤷', translationKey: 'hero.painPoints.e7' },
  { emoji: '😩', translationKey: 'hero.painPoints.job' },
  { emoji: '😶‍🌫️', translationKey: 'hero.painPoints.deadline' },
] as const;

const HeroSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <div className={styles.badge}>{t('hero.badge')}</div>

      <h1 className={styles.title}>
        {t('hero.title')}
        <br />
        <span className={styles.highlight}>{t('hero.highlight')}</span>
      </h1>

      <p className={styles.description}>{t('hero.description')}</p>

      <div className={styles.painPoints}>
        {PAIN_POINTS.map(({ emoji, translationKey }) => (
          <div key={translationKey} className={styles.painPoint}>
            <span className={styles.emoji}>{emoji}</span>
            {t(translationKey)}
          </div>
        ))}
      </div>

      <p className={styles.solution}>{t('hero.solution')}</p>

      <div className={styles.earlyAccess}>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <Input type="email" placeholder={t('hero.email.placeholder')} />
          </div>
          <Button preset="large_primary">{t('hero.email.cta')}</Button>
        </div>
        <p className={styles.note}>{t('hero.email.note')}</p>
      </div>
    </section>
  );
};

export default HeroSection;
