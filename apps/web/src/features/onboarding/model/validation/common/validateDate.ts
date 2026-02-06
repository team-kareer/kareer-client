import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type ValidateDateOptions } from '@features/onboarding';

export const validateDate = (
  value: string,
  options: ValidateDateOptions = {},
) => {
  const { allowFuture = false, allowPast = false } = options;

  if (!value) {
    return true;
  }

  const completeFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  const hasCompleteFormat = completeFormatRegex.test(value);

  // 완전한 형식 체크
  if (!hasCompleteFormat) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  const [year, month, day] = value.split('-');
  const yearNumber = Number(year);
  const monthNumber = Number(month);
  const dayNumber = Number(day);

  const inputDate = new Date(yearNumber, monthNumber - 1, dayNumber);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (
    inputDate.getFullYear() !== yearNumber ||
    inputDate.getMonth() !== monthNumber - 1 ||
    inputDate.getDate() !== dayNumber
  ) {
    return VALIDATION_MESSAGE.DATE.INVALID_DATE;
  }

  if (!allowFuture && inputDate > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  } else if (!allowPast && inputDate < today) {
    return VALIDATION_MESSAGE.DATE.PAST_NOT_ALLOWED;
  }

  return true;
};
