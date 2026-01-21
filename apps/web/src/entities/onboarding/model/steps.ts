import { OnboardingStepData } from '@widgets/onboarding';

export type StepStatus = 'Completed' | 'In Progress' | 'Next' | 'Later';

const getStepStatus = (index: number, currentStepIndex: number): StepStatus => {
  if (index < currentStepIndex) {
    return 'Completed';
  }
  if (index === currentStepIndex) {
    return 'In Progress';
  }
  if (index === currentStepIndex + 1) {
    return 'Next';
  }
  return 'Later';
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
