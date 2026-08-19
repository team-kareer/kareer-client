import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as styles from './stats-section.css';

const ANIMATION_DURATION = 1800;
const DESIRED_EMPLOYMENT_RATE = 77;
const ACTUAL_EMPLOYMENT_RATE = 7.7;

const StatsSection = () => {
  const { t } = useTranslation('landing');
  const containerRef = useRef<HTMLElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrameId: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();

        const startTime = performance.now();
        const updateProgress = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / ANIMATION_DURATION, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setAnimationProgress(easedProgress);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(updateProgress);
          }
        };

        animationFrameId = requestAnimationFrame(updateProgress);
      },
      { threshold: 0.15 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const desiredEmploymentRate = Math.floor(
    DESIRED_EMPLOYMENT_RATE * animationProgress,
  );
  const actualEmploymentRate = (
    ACTUAL_EMPLOYMENT_RATE * animationProgress
  ).toFixed(1);

  return (
    <section ref={containerRef} className={styles.container}>
      <p className={styles.label}>{t('stats.label')}</p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.value}>
            <span className={styles.accent}>{desiredEmploymentRate}</span>%
          </p>
          <p className={styles.description}>
            {t('stats.descriptions.desiredEmployment')}
          </p>
        </div>

        <p className={styles.versus}>{t('stats.versus')}</p>

        <div className={styles.stat}>
          <p className={styles.value}>
            <span className={styles.accent}>{actualEmploymentRate}</span>%
          </p>
          <p className={styles.description}>
            {t('stats.descriptions.actualEmployment')}
          </p>
        </div>
      </div>

      <p className={styles.gap}>{t('stats.gap')}</p>
    </section>
  );
};

export default StatsSection;
