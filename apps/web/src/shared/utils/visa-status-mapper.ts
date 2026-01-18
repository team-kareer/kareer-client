import { VisaStatusResponse } from '@entities/job/model/types';

import { calculateDDay } from './dday-calculate';

const formatDate = (dateStr?: string | null) => {
  if (!dateStr) {
    return '-';
  }
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const formatDDayText = (dDay: number | undefined, pastLabel: string = '-') => {
  if (dDay === undefined) {
    return '-';
  }

  if (dDay < 0) {
    return pastLabel;
  }
  if (dDay === 0) {
    return 'D-Day';
  }
  return `D-${dDay}`;
};

export const VisaStatusMapper = (data?: VisaStatusResponse | null) => {
  if (!data) {
    return null;
  }

  const { visaType, visaExpiredAt, expectedGraduationDate } = data;

  const gradDDay = calculateDDay(expectedGraduationDate);
  const remainDDay = calculateDDay(visaExpiredAt);

  const currentVisa = {
    statusName: 'Current Visa Status',
    title: visaType ? `${visaType.replace(/(\D)(\d)/, '$1-$2')} Student` : '-',
    date: `Expires ${formatDate(visaExpiredAt)}`,
    isActive: true,
  };

  const graduation = {
    statusName: 'Graduation Countdown',
    title: formatDate(expectedGraduationDate),
    date: formatDDayText(gradDDay, 'Graduated'),
    isActive: false,
  };

  const remaining = {
    statusName: 'Remaining Stay',
    title: 'Job Seeker',
    date: formatDDayText(remainDDay, 'Expired'),
    isActive: false,
  };

  return { currentVisa, graduation, remaining };
};
