import { MouseEvent } from 'react';
import { BookmarkCheckIcon, BookmarkIcon } from '@kds/icons';

import * as styles from './scrap-button.css.ts';

interface ScrapButtonProps {
  isScraped: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void; // 피쳐 레이어는 어디로 navigate 하는지 몰라야함
}

const ScrapButton = ({ isScraped, onClick }: ScrapButtonProps) => {
  return (
    <button type="button" className={styles.scrapButton} onClick={onClick}>
      {isScraped ? (
        <BookmarkIcon width={24} height={24} />
      ) : (
        <BookmarkCheckIcon width={24} height={24} />
      )}
    </button>
  );
};

export default ScrapButton;
