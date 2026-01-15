import { ReactNode } from 'react';
import { Tag } from '@kds/ui';

import DefaultJobImage from '@shared/assets/images/default_company_image.webp';

import * as styles from './bookmarked-job-card.css.ts';
interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate: string;
  imageUrl?: string;
  locations: string[];
  jobTypes?: string[];
  scrapAction?: ReactNode;
  dDayTag?: ReactNode;
  onClick?: () => void;
}

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
  // 디데이 계산 로직 shared에서 구현 예정 후 추가 예정

  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <div className={styles.dDayTag}>{dDayTag}</div>
        <img
          src={imageUrl || DefaultJobImage}
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
            <p className={styles.textStyle({ type: 'dueDate' })}>{dueDate}</p>
          </div>
          <div
            className={styles.scrapButtonWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            {scrapAction}
          </div>
        </div>
        <div className={styles.tagsWrapper}>
          <Tag color={'pastel_skyblue'}>{locations}</Tag>
          {jobTypes && <Tag color="disabled_gray">{jobTypes}</Tag>}
        </div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
