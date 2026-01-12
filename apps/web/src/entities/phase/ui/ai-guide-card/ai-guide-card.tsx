import { BangCircleIcon, InfoCircleIcon, SuccessCircleIcon } from '@kds/icons';

import * as styles from './ai-guide-card.css';

type AiGuideCardType = 'importance' | 'guideline' | 'commonMistakes';

interface AiGuideCardProps {
  type: AiGuideCardType;
  description: string;
}

const CARD_CONTENT = {
  importance: {
    title: 'Why this matters',
    icon: <InfoCircleIcon width={24} height={24} />,
  },
  guideline: {
    title: 'How to do it properly',
    icon: <SuccessCircleIcon width={24} height={24} />,
  },
  commonMistakes: {
    title: 'Common mistakes',
    icon: <BangCircleIcon width={24} height={24} />,
  },
} as const;

const AiGuideCard = ({ type, description }: AiGuideCardProps) => {
  const { title, icon } = CARD_CONTENT[type];

  return (
    <article className={styles.container}>
      {icon}
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default AiGuideCard;
