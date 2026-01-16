import { LoginButton } from '@features/auth';
import { appConfig } from '@shared/apis/configs/app-config';

import * as styles from './hero-section.css';

const HERO_COPY = {
  NORMAL: 'Turn visa barriers\ninto ',
  HIGHLIGHT: 'career opportunities',
};

const HeroSection = () => {
  const handleGoogleLogin = () => {
    const loginUrl = appConfig.auth.googleLoginUrl;

    window.location.href = loginUrl;
  };
  return (
    <div className={styles.container}>
      <p className={styles.copy}>
        {HERO_COPY.NORMAL}
        <span className={styles.highlight}>{HERO_COPY.HIGHLIGHT}</span>
      </p>
      <div>
        <LoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default HeroSection;
