import { components } from '@shared/types/schema';

import { formatDate } from './date-formatter';
import { calculateDDay } from './dday-calculate';

type UserStatus = components['schemas']['MemberStatusResponse'];

const formatDDayText = (dDay: number | undefined, dDayLabel: string = '-') => {
  if (dDay === undefined) {
    return '-';
  }

  if (dDay < 0) {
    return dDayLabel;
  }
  if (dDay === 0) {
    return 'D-Day';
  }
  return `D-${dDay}`;
};

const getVisaStatusLabel = (visaType?: string | null): string => {
  if (!visaType) {
    return '-';
  }

  const visaStatusMap: Record<string, string> = {
    D10: 'Job Seeker',
    D2: 'Student',
  };

  return visaStatusMap[visaType] || visaType;
};

export const getVisaStatusRenderData = (data?: UserStatus | null) => {
  if (!data) {
    return null;
  }

  const { visaType, visaExpiredAt, expectedGraduationDate } = data;

  const gradDDay = calculateDDay(expectedGraduationDate);
  const remainDDay = calculateDDay(visaExpiredAt);

  const currentVisa = {
    statusName: 'Current Visa Status',
    title: visaType
      ? `${visaType.replace(/(\D)(\d)/, '$1-$2')} ${getVisaStatusLabel(visaType)}`
      : '-',
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
    title: formatDate(visaExpiredAt),
    date: formatDDayText(remainDDay, 'Expired'),
    isActive: false,
  };

  return { currentVisa, graduation, remaining };
};
