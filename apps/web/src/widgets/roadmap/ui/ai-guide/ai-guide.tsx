import { LogoIcon } from '@kds/icons';

import { AIGuideCard } from '@entities/phase';

import * as styles from './ai-guide.css';

const CONTENT = {
  TITLE: 'AI Guide & Risk',
  DESCRIPTION: 'Document all work exprience during internship period',
};

interface AIGuideProps {
  importance: string;
  guideline: string[];
  commonMistakes: string[];
}

const formatDescription = (value: string | string[]) => {
  return Array.isArray(value) ? value.join('\n') : value;
};

const AIGuide = ({ importance, guideline, commonMistakes }: AIGuideProps) => {
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
          <p className={styles.title}>{CONTENT.TITLE}</p>
          <p className={styles.description}>{CONTENT.DESCRIPTION}</p>
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
