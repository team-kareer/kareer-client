import { LogoIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import { AIGuideCard } from '@entities/phase';

import * as styles from './ai-guide.css';

interface AIGuideProps {
  importance: string;
  guideline: string[];
  commonMistakes: string[];
}

const formatDescription = (value: string | string[]) => {
  return Array.isArray(value) ? value.join('\n') : value;
};

const AIGuide = ({ importance, guideline, commonMistakes }: AIGuideProps) => {
  const { t } = useTranslation('roadmap');
  const GUIDE_ITEMS = [
    {
      type: 'importance',
      description: importance,
    },
    {
      type: 'guideline',
      description: guideline,
    },
    {
      type: 'commonMistakes',
      description: commonMistakes,
    },
  ] as const;

  return (
    <article className={styles.container}>
      <div className={styles.titleContainer}>
        <LogoIcon width={24} height={24} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>{t('aiGuide.header.title')}</p>
          <p className={styles.description}>
            {t('aiGuide.header.description')}
          </p>
        </div>
      </div>
      {GUIDE_ITEMS.map(({ type, description }) => (
        <AIGuideCard
          key={type}
          type={type}
          description={formatDescription(description)}
        />
      ))}
    </article>
  );
};

export default AIGuide;
