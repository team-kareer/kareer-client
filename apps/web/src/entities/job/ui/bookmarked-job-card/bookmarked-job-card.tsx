import { ReactNode } from 'react';
import { Tag } from '@kds/ui';

import { default_company_image } from '@shared/assets';

import * as styles from './bookmarked-job-card.css.ts';

interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate?: string;
  imageUrl?: string;
  locations: string[];
  jobTypes?: string[];
  scrapAction?: ReactNode;
  dDayTag?: ReactNode;
  onClick?: () => void;
}

const formatListText = (items?: string[]) => {
  if (!items || items.length === 0) {
    return '-';
  }
  if (items.length === 1) {
    return items[0];
  }
  return `${items[0]} +${items.length - 1}`;
};

const BookmarkedJobCard = ({
  title,
  companyName,
  dueDate,
  imageUrl,
  locations,
  jobTypes,
  scrapAction,
  dDayTag,
  onClick,
}: BookmarkedJobCardProps) => {
  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <div className={styles.dDayTag}>{dDayTag}</div>
        <img
          src={imageUrl || default_company_image}
          alt={`${companyName} 채용 공고 이미지`}
          className={styles.image}
        />
      </figure>
      <section className={styles.content}>
        <div className={styles.header}>
          <div className={styles.textBox}>
            <h3 className={styles.textStyle({ type: 'company' })}>
              {companyName}
            </h3>
            <h2 className={styles.textStyle({ type: 'title' })}>{title}</h2>
            <p className={styles.textStyle({ type: 'dueDate' })}>
              {dueDate || '-'}
            </p>
          </div>
          <div
            className={styles.scrapButtonWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            {scrapAction}
          </div>
        </div>
        <div className={styles.tagsWrapper}>
          {jobTypes && (
            <Tag color="pastel_skyblue">{formatListText(jobTypes)}</Tag>
          )}
          <Tag color="disabled_gray">{formatListText(locations)}</Tag>
        </div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
