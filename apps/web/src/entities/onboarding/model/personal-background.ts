/**
 * Target Job에 따라 적절한 플레이스홀더 텍스트를 반환하는 함수
 */
export const getPlaceholderByTargetJob = (
  targetJob: string | undefined,
  placeholderMap: Record<string, string>,
): string => {
  return targetJob && placeholderMap[targetJob]
    ? placeholderMap[targetJob]
    : '';
};
