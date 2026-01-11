import { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = () => {
  const [step, setStep] = useState(0);
  return {
    step,
    setStep,
  };
};
