import { useFormContext, useWatch } from 'react-hook-form';

import { type OnboardingForm } from '@entities/onboarding';
import {
  getJobSkills,
  parseSkillsFromString,
  toggleSkill,
} from '@entities/onboarding/model/target-job-skills';

/**
 * Target Job 스킬 관련 로직을 관리하는 커스텀 훅
 * @returns 스킬 관련 상태와 핸들러 함수들
 * @property targetJob - 현재 선택된 직무
 * @property selectedSkills - 현재 선택된 스킬 ID 배열
 * @property currentJobSkills - 현재 직무에 해당하는 스킬 옵션 배열
 * @property handleSkillToggle - 스킬 체크박스 토글 핸들러
 */
export const useTargetJobSkills = () => {
  const { control, setValue } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
    defaultValue: '',
  });

  const targetJobSkill = useWatch({
    control,
    name: 'targetJobSkill',
    defaultValue: '',
  });

  const selectedSkills = parseSkillsFromString(targetJobSkill || '');
  const currentJobSkills = getJobSkills(targetJob);

  const handleSkillToggle = (skillId: string) => {
    const newSkills = toggleSkill(selectedSkills, skillId);
    setValue('targetJobSkill', newSkills.join(','));
  };

  return {
    targetJob,
    selectedSkills,
    currentJobSkills,
    handleSkillToggle,
  };
};
