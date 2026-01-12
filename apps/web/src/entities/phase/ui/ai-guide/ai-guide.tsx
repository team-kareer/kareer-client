import { LogoIcon } from '@kds/icons';

import AiGuideCard from '@entities/phase/ui/ai-guide-card/ai-guide-card';

import * as styles from './ai-guide.css';

const CONTENT = {
  TITLE: 'AI Guide & Risk',
  DESCRIPTION: 'Document all work exprience during internship period',
};

interface AiGuideProps {
  importance: string;
  guideline: string;
  commonMistakes: string;
}

const AiGuide = ({ importance, guideline, commonMistakes }: AiGuideProps) => {
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
        <AiGuideCard key={type} type={type} description={description} />
      ))}
    </article>
  );
};

export default AiGuide;
