export const getDueInDays = (deadline: string): number | null => {
  const due = new Date(deadline);

  if (Number.isNaN(due.getTime())) {
    return null;
  }

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const startOfDue = new Date(due.getFullYear(), due.getMonth(), due.getDate());

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  return Math.ceil(
    (startOfDue.getTime() - startOfToday.getTime()) / MILLISECONDS_PER_DAY,
  );
};
