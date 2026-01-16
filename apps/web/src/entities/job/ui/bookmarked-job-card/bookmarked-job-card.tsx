import { ReactNode } from 'react';
import { Tag } from '@kds/ui';

import { default_company_image } from '@shared/assets';
import { TagColor } from '@shared/utils/job-tag-color.ts';

import * as styles from './bookmarked-job-card.css';
interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate?: string;
  imageUrl?: string;
  locations: string[];
  jobTypes?: string[];
  scrapAction?: ReactNode;
  dDay?: number;
  onClick?: () => void;
  jobTagColor?: TagColor;
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
  dDay,
  jobTagColor = 'pastel_purple',
  onClick,
}: BookmarkedJobCardProps) => {
  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <Tag color="outlined_blue" className={styles.dDayTag}>
          D-{dDay}
        </Tag>
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
            {dueDate && (
              <p className={styles.textStyle({ type: 'dueDate' })}>
                {dueDate || '-'}
              </p>
            )}
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
            <Tag color={jobTagColor}>{formatListText(jobTypes)}</Tag>
          )}
          <Tag color="disabled_gray">{formatListText(locations)}</Tag>
        </div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
