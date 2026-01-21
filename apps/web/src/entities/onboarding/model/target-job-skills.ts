import { JOB_SKILL_OPTIONS, type SkillOption } from './job-skills';

/**
 * 쉼표로 구분된 스킬 문자열을 배열로 변환하는 함수
 * @param targetJobSkill - 쉼표로 구분된 스킬 ID 문자열
 * @returns 스킬 ID 배열
 */
export const parseSkillsFromString = (targetJobSkill: string): string[] => {
  return targetJobSkill ? targetJobSkill.split(',').filter(Boolean) : [];
};

/**
 * 직무에 해당하는 스킬 옵션 배열 반환
 * @param targetJob - 선택된 직무
 * @returns 해당 직무의 스킬 옵션 배열, 없으면 빈 배열
 */
export const getJobSkills = (targetJob: string): SkillOption[] => {
  return targetJob ? JOB_SKILL_OPTIONS[targetJob] || [] : [];
};

/**
 * 스킬 배열에서 특정 스킬 토글
 * @param selectedSkills - 현재 선택된 스킬 ID 배열
 * @param skillId - 토글할 스킬 ID
 * @returns 토글된 스킬 ID 배열
 */
export const toggleSkill = (
  selectedSkills: string[],
  skillId: string,
): string[] => {
  const isSelected = selectedSkills.includes(skillId);
  return isSelected
    ? selectedSkills.filter((id) => id !== skillId)
    : [...selectedSkills, skillId];
};
