import { type SupportedLanguage } from '@shared/i18n/constants';
import { components } from '@shared/types/schema';

import { calculateDDay } from './dday-calculate';

type UserStatus = components['schemas']['MemberStatusResponse'];
type Translate = (key: string, options?: Record<string, string>) => string;

const EMPTY_TEXT = '-';
const TODAY_DDAY = 0;

const formatDDayText = (
  dDay: number | undefined,
  completedLabel: string,
  todayLabel: string,
) => {
  if (dDay === undefined) {
    return EMPTY_TEXT;
  }

  if (dDay < 0) {
    return completedLabel;
  }

  if (dDay === TODAY_DDAY) {
    return todayLabel;
  }

  return `D-${dDay}`;
};

const getVisaStatusLabel = (
  visaType: string | null | undefined,
  d10Label: string,
  d2Label: string,
) => {
  switch (visaType) {
    case 'D10':
      return d10Label;
    case 'D2':
      return d2Label;
    default:
      return visaType ?? EMPTY_TEXT;
  }
};

const formatVisaStatusDate = (
  dateStr: string | null | undefined,
  language: SupportedLanguage,
) => {
  if (!dateStr) {
    return EMPTY_TEXT;
  }

  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return EMPTY_TEXT;
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (language) {
    case 'ko':
      return `${year}년 ${month}월 ${day}일`;
    case 'zh-CN':
      return `${year}年${month}月${day}日`;
    case 'vi':
      return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
    case 'en':
    default:
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date);
  }
};

export const getVisaStatusRenderData = (
  data: UserStatus | null | undefined,
  language: SupportedLanguage,
  t: Translate,
) => {
  if (!data) {
    return null;
  }

  const { visaType, visaExpiredAt, expectedGraduationDate } = data;
  const formattedVisaType = visaType?.replace(/(\D)(\d)/, '$1-$2');

  const currentVisa = {
    statusName: t('visa.current.statusName'),
    title: formattedVisaType
      ? t('visa.current.title', {
          visaCode: formattedVisaType,
          visaLabel: getVisaStatusLabel(
            visaType,
            t('visa.labels.D10'),
            t('visa.labels.D2'),
          ),
        })
      : EMPTY_TEXT,
    date: t('visa.current.expiryDate', {
      date: formatVisaStatusDate(visaExpiredAt, language),
    }),
    isActive: true,
  };

  const graduation = {
    statusName: t('visa.graduation.statusName'),
    title: formatVisaStatusDate(expectedGraduationDate, language),
    date: formatDDayText(
      calculateDDay(expectedGraduationDate),
      t('visa.graduation.completed'),
      t('visa.dday.today'),
    ),
    isActive: false,
  };

  const remaining = {
    statusName: t('visa.remaining.statusName'),
    title: formatVisaStatusDate(visaExpiredAt, language),
    date: formatDDayText(
      calculateDDay(visaExpiredAt),
      t('visa.remaining.completed'),
      t('visa.dday.today'),
    ),
    isActive: false,
  };

  return { currentVisa, graduation, remaining };
};
