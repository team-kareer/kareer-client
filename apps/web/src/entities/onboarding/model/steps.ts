import { OnboardingStepData } from '@widgets/onboarding';

export type StepStatus = 'Done' | 'In Process' | 'Disabled';

const getStepStatus = (index: number, currentStepIndex: number): StepStatus => {
  if (index < currentStepIndex) {
    return 'Done';
  }
  if (index === currentStepIndex) {
    return 'In Process';
  }
  return 'Disabled';
};

export const createStepData = (
  titles: string[],
  currentStepIndex: number,
): OnboardingStepData[] => {
  return titles.map((title, index) => ({
    stepNumber: index + 1,
    title,
    status: getStepStatus(index, currentStepIndex),
  }));
};
