import { GlobalIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import { PAIN_POINTS } from '@widgets/landing/constants';

import EarlyAccessForm from '../early-access-form/early-access-form';

import * as styles from './hero-section.css';

const HeroSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section className={styles.container}>
      <div className={styles.badge}>
        <GlobalIcon width={16} height={16} />
        {t('hero.badge')}
      </div>

      <h1 className={styles.title}>
        {t('hero.title')}
        <br />
        <span className={styles.highlight}>{t('hero.highlight')}</span>
      </h1>

      <p className={styles.description}>{t('hero.description')}</p>

      <div className={styles.painPoints}>
        {PAIN_POINTS.map(({ icon: Icon, translationKey }) => (
          <div key={translationKey} className={styles.painPoint}>
            <Icon width={18} height={18} className={styles.painPointIcon} />
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
