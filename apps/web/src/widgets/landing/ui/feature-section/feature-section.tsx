import { ReactNode } from 'react';

import * as styles from './feature-section.css';

interface FeatureSectionProps {
  featureLabel: string;
  title: string;
  description: string;
  preview: ReactNode;
  previewPosition?: 'left' | 'right';
  background?: 'default' | 'muted';
}

const FeatureSection = ({
  featureLabel,
  title,
  description,
  preview,
  previewPosition = 'right',
  background = 'default',
}: FeatureSectionProps) => {
  return (
    <section className={styles.container({ background })}>
      <div className={styles.inner({ previewPosition })}>
        <div className={styles.content}>
          <p className={styles.featureLabel}>{featureLabel}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.preview}>{preview}</div>
      </div>
    </section>
  );
};

export default FeatureSection;
