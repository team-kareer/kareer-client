export const useTextCount = (value: string, maxLength?: number) => {
  const textCount = value.length;
  const isOverMax = maxLength ? textCount > maxLength : false;

  return { textCount, isOverMax };
};
