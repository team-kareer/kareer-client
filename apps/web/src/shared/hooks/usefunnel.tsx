import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = <T extends string[]>(
  steps: T,
  completePath: string,
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentStep = searchParams.get('step') || steps[0];
  const currentStepIndex = steps.indexOf(currentStep as T[number]);

  const goToStep = () => {
    const nextStep = steps[currentStepIndex + 1];
    if (nextStep) {
      setSearchParams({ step: nextStep });
    } else {
      navigate(completePath);
    }
  };

  const goToPrevStep = () => {
    const previousStep = steps[currentStepIndex - 1];
    if (previousStep) {
      setSearchParams({ step: previousStep });
    } else {
      navigate(-1);
    }
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = Children.toArray(children).find((child) => {
      if (!isValidElement<StepProps>(child)) {
        return false;
      }
      return child.props.name === currentStep;
    });
    return <>{targetStep}</>;
  };
  const Step = (props: StepProps) => {
    return <div>{props.children}</div>;
  };
  return { Funnel, Step, goToStep, goToPrevStep };
};
