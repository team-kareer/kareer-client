import { ReactNode } from 'react';

import * as styles from './benefit-card.css';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <article className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </article>
);

export default BenefitCard;
