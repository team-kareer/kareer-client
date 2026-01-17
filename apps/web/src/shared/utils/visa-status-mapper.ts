import { VisaStatusResponse } from '@entities/job/model/types';

import { calculateDDay } from './dday-calculate';

const formatDate = (dateStr?: string) => {
  if (!dateStr) {
    return '-';
  }
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const VisaStatusMapper = (
  data: VisaStatusResponse | null | undefined,
) => {
  if (!data) {
    return null;
  }

  const { visaType, visaExpiredAt, expectedGraduationDate } = data;

  const daysDiff = calculateDDay(expectedGraduationDate);

  // current visa
  const currentVisa = {
    title: visaType ? `${visaType.replace(/(\D)(\d)/, '$1-$2')} Student` : '-',
    statusName: 'Current Visa Status',
    date: `Expires ${formatDate(visaExpiredAt)}`,
    isActive: true,
  };

  // 졸업 카운트다운 카드 (D-2)
  const graduation = {
    statusName: 'Graduation Countdown',
    title: formatDate(expectedGraduationDate),
    date:
      daysDiff !== undefined
        ? daysDiff < 0
          ? 'Graduated'
          : daysDiff === 0
            ? 'D-Day'
            : `D-${daysDiff}`
        : '-',
    isActive: false,
  };

  // 체류 기간 카드 (D-10)
  const remainingDDay = calculateDDay(visaExpiredAt);
  const remaining = {
    statusName: 'Remaining Stay',
    title: 'Job Seeker',
    date: remainingDDay !== undefined ? `D-${remainingDDay}` : '-',
    isActive: false,
  };

  return { currentVisa, graduation, remaining };
};
