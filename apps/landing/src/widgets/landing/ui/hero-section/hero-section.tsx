import { useTranslation } from 'react-i18next';

import EarlyAccessForm from '../early-access-form/early-access-form';

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

      <EarlyAccessForm
        placeholder={t('hero.email.placeholder')}
        buttonLabel={t('hero.email.cta')}
        note={t('hero.email.note')}
      />
    </section>
  );
};

export default HeroSection;
