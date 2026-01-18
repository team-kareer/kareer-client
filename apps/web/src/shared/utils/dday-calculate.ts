export const calculateDDay = (dueDate?: string): number | undefined => {
  if (!dueDate) {
    return undefined;
  }

  const today = new Date();
  // 시간은 무시하고 날짜만 비교하기 위해 00:00:00으로 초기화
  today.setHours(0, 0, 0, 0);

  const target = new Date(dueDate);
  target.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  // 밀리초 -> 일 단위 변환 (1000 * 60 * 60 * 24)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
