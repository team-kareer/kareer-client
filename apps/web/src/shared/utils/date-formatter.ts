export const formatDate = (dateStr?: string | null): string => {
  if (!dateStr) {
    return '-';
  }
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatMonthYear = (date: string) => {
  if (!date) {
    return '-';
  }

  const parts = date.split('-');

  if (parts.length != 3 || !parts[1]) {
    return '-';
  }

  const yearParts = parts[0];
  const monthParts = parts[1];

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = monthNames[parseInt(monthParts, 10) - 1];

  return `${month}. ${yearParts}`;
};
