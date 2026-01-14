import { ReactNode } from 'react';

import DefaultJobImage from '@shared/assets/images/default-image.webp';

import * as styles from './bookmarked-job-card.css.ts';
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
          src={imageUrl || DefaultJobImage}
          alt={`${companyName} 채용 공고 이미지`}
          className={styles.image}
        />
      </figure>

      <section className={styles.content}>
        <div className={styles.header}>
          <div className={styles.textBox}>
            <h3 className={styles.companyName}>{companyName}</h3>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.dueDate}>{dueDate}</p>
          </div>
          <div className={styles.scrapButtonWrapper}>{children}</div>
        </div>
        <div className={styles.tagsWrapper}>{tags}</div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
