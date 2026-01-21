import { ReactNode } from 'react';
import { Tag } from '@kds/ui';

import { JobPostingItem } from '@entities/job/model/types';
import { default_company_image } from '@shared/assets';
import { TagColor } from '@shared/utils/job-tag-color';

import * as styles from './bookmarked-job-card.css';

interface BookmarkedJobCardProps extends JobPostingItem {
  dDay?: number;
  jobTagColor: TagColor;
  scrapAction: ReactNode;
  onClick?: () => void;
}

const formatDeadLine = (dDay?: number) => {
  if (dDay === undefined) {
    return '-';
  }

  if (dDay === 0) {
    return 'D-Day';
  }
  return `D-${dDay}`;
};

const BookmarkedJobCard = ({
  title,
  company,
  deadline,
  imageUrl,
  address,
  arrangement,
  dDay,
  scrapAction,
  jobTagColor,
  onClick,
}: BookmarkedJobCardProps) => {
  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <Tag color="outlined_blue" className={styles.dDayTag}>
          {formatDeadLine(dDay)}
        </Tag>
        <img
          src={imageUrl || default_company_image}
          alt={`${company} 채용 공고 이미지`}
          className={styles.image}
        />
      </figure>
      <section className={styles.content}>
        <div className={styles.header}>
          <div className={styles.textBox}>
            <h3 className={styles.textStyle({ type: 'company' })}>{company}</h3>
            <h2 className={styles.textStyle({ type: 'title' })}>{title}</h2>
            {deadline && (
              <p className={styles.textStyle({ type: 'dueDate' })}>
                {deadline || '-'}
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
          {arrangement && <Tag color={jobTagColor}>{arrangement}</Tag>}
          {address && <Tag color="disabled_gray">{address}</Tag>}
        </div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
