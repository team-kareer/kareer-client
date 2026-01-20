export const getPlaceholderByTargetJob = (
  targetJob: string | undefined,
  placeholderMap: Record<string, string>,
): string => {
  return targetJob && placeholderMap[targetJob]
    ? placeholderMap[targetJob]
    : '';
};
