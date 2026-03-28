import { ReactNode } from 'react';
import { Tag } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import { JobPostingItem } from '@entities/job';
import { default_company_image } from '@shared/assets';
import { formatDate } from '@shared/utils/date-formatter';
import { TagColor } from '@shared/utils/job-formatter';

import * as styles from './bookmarked-job-card.css';

interface BookmarkedJobCardProps extends JobPostingItem {
  dDay?: number;
  jobTagColor: TagColor;
  arrangementDisplay: string;
  addressDisplay: string;
  scrapAction: ReactNode;
  onClick?: () => void;
}

const formatDeadLine = (todayLabel: string, dDay?: number) => {
  if (dDay === undefined) {
    return '-';
  }

  if (dDay === 0) {
    return todayLabel;
  }
  return `D-${dDay}`;
};

const BookmarkedJobCard = ({
  title,
  company,
  deadline,
  imageUrl,
  dDay,
  scrapAction,
  jobTagColor,
  arrangementDisplay,
  addressDisplay,
  onClick,
}: BookmarkedJobCardProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <article className={styles.container} onClick={onClick}>
      <figure className={styles.imageBox}>
        <Tag color="outlined_blue" className={styles.dDayTag}>
          {formatDeadLine(t('bookmarkedJobs.list.deadline.today'), dDay)}
        </Tag>
        <img
          src={imageUrl || default_company_image}
          alt={t('bookmarkedJobs.list.imageAlt', { company })}
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
                {formatDate(deadline) || '-'}
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
          {arrangementDisplay && (
            <Tag color={jobTagColor} className={styles.tag}>
              {arrangementDisplay}
            </Tag>
          )}
          {addressDisplay && (
            <Tag color="disabled_gray" className={styles.tag}>
              {addressDisplay}
            </Tag>
          )}
        </div>
      </section>
    </article>
  );
};

export default BookmarkedJobCard;
