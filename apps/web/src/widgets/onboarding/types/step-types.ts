export type StepStatus = 'Done' | 'In Process' | 'Disabled';
export interface OnboardingStepData {
  stepNumber: number;
  title: string;
  status: 'Done' | 'In Process' | 'Disabled';
}
