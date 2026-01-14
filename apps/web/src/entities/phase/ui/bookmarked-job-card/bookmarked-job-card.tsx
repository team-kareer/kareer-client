import { ReactNode } from 'react';

import * as styles from './bookmarked-job-card.css';

// import DefaultImage from '@/shared/assets/images/default-job.webp';

interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate: string;
  imageUrl?: string;
  tags: ReactNode;
  children: ReactNode;
  onScrapClick?: () => void;
  onClick?: () => void;
}

const BookmarkedJobCard = ({
  companyName,
  title,
  dueDate,
  imageUrl,
  tags,
  children,
  onClick,
}: BookmarkedJobCardProps) => {
  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <img
          src={imageUrl || '' /*DefaultImage*/}
          alt={`${companyName} 채용 공고 이미지`}
          className={styles.image}
        />
        <div className={styles.scrapButtonWrapper}>{children}</div>
      </figure>

      <section className={styles.content}>
        <div className={styles.textBox}>
          <h3 className={styles.companyName}>{companyName}</h3>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.dueDate}>{dueDate}</p>
        </div>
        <div className={styles.tagsWrapper}>{tags}</div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
