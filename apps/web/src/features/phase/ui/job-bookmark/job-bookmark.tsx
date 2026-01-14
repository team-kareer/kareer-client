import { BookmarkCheckIcon, BookmarkIcon } from '@kds/icons';

import * as styles from './job-bookmark.css.ts';

// Todo: scrap api hook 추가

interface ScrapButtonProps {
  isScraped: boolean;
}

const ScrapButton = ({ isScraped }: ScrapButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isScraped ? '스크랩 취소' : '스크랩'}
      className={styles.scrapButton}
    >
      {isScraped ? (
        <BookmarkCheckIcon width={24} height={24} />
      ) : (
        <BookmarkIcon width={24} height={24} />
      )}
    </button>
  );
};

export default ScrapButton;
