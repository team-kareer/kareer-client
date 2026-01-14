import { ReactNode } from 'react';

import * as styles from './feature-card.css';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
