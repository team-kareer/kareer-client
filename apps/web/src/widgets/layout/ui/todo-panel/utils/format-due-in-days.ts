export const formatDueInDays = (dueDate: string) => {
  const due = new Date(dueDate);
  if (Number.isNaN(due.getTime())) {
    return '';
  }

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const startOfDue = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  const diffDays = Math.ceil(
    (startOfDue.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays < 0) {
    return 'Overdue';
  }

  return `Due in ${diffDays} days`;
};
