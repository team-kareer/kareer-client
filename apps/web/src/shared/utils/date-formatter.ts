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
