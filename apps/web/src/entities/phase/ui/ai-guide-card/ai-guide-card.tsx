import { BangCircleIcon, InfoCircleIcon, SuccessCircleIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import * as styles from './ai-guide-card.css';

type AIGuideCardType = 'importance' | 'guideline' | 'commonMistakes';

interface AIGuideCardProps {
  type: AIGuideCardType;
  description: string;
}

const CARD_CONTENT = {
  importance: {
    icon: <InfoCircleIcon width={24} height={24} />,
  },
  guideline: {
    icon: <SuccessCircleIcon width={24} height={24} />,
  },
  commonMistakes: {
    icon: <BangCircleIcon width={24} height={24} />,
  },
} as const;

const AIGuideCard = ({ type, description }: AIGuideCardProps) => {
  const { t } = useTranslation('roadmap');
  const { icon } = CARD_CONTENT[type];

  return (
    <article className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h3 className={styles.title}>{t(`aiGuide.cards.${type}.title`)}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default AIGuideCard;
