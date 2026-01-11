import { ReactNode } from 'react';

import * as styles from './ai-guide-card.css';

interface AiGuideCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AiGuideCard = ({ icon, title, description }: AiGuideCardProps) => {
  return (
    <div className={styles.container}>
      {icon}
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AiGuideCard;
