import { COMPLETE_DATE_FORMAT } from './constants';

type DateParts = [year: number, month: number, day: number];

const parseDateParts = (value: string): DateParts => {
  const [year, month, day] = value.split('-').map(Number) as DateParts;

  return [year, month, day];
};

export const toLocalDate = (value: string): Date => {
  const [year, month, day] = parseDateParts(value);

  return new Date(year, month - 1, day);
};

export const isRealDate = (value: string): boolean => {
  if (!COMPLETE_DATE_FORMAT.test(value)) {
    return false;
  }

  const [year, month, day] = parseDateParts(value);
  const date = toLocalDate(value);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
};

export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
};
