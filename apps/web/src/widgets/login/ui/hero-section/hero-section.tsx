import { useTranslation } from 'react-i18next';

import { LoginButton } from '@features/auth';
import { appConfig } from '@shared/apis/configs/app-config';

import * as styles from './hero-section.css';

const HeroSection = () => {
  const { t } = useTranslation('login');

  const handleGoogleLogin = () => {
    const loginUrl = appConfig.auth.googleLoginUrl;

    window.location.href = loginUrl;
  };
  return (
    <div className={styles.container}>
      <p className={styles.copy}>
        {t('hero.copy.normal')}
        <span className={styles.highlight}>{t('hero.copy.highlight')}</span>
      </p>
      <div>
        <LoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default HeroSection;
