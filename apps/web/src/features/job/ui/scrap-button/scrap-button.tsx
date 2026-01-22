import { MouseEvent } from 'react';
import { BookmarkCheckIcon, BookmarkIcon } from '@kds/icons';

import * as styles from './scrap-button.css';

interface ScrapButtonProps {
  isScraped: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ScrapButton = ({ isScraped, onClick }: ScrapButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <button type="button" className={styles.scrapButton} onClick={handleClick}>
      {isScraped ? (
        <BookmarkCheckIcon width={24} height={24} />
      ) : (
        <BookmarkIcon width={24} height={24} />
      )}
    </button>
  );
};

export default ScrapButton;
