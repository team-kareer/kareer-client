import { LoginButton } from '@features/auth';

import * as styles from './hero-section.css';

const HERO_COPY = {
  NORMAL: 'Turn visa barriers\ninto ',
  HIGHLIGHT: 'career opportunities',
};

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.copy}>
        {HERO_COPY.NORMAL}
        <span className={styles.highlight}>{HERO_COPY.HIGHLIGHT}</span>
      </p>
      <div>
        <LoginButton
          onClick={() => {
            // @TODO 소셜 로그인 api 연동
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
