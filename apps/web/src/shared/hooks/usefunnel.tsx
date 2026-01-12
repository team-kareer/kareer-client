import {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router';

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = (steps: string[], completePath: string) => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(steps[0] ?? '');
  const currentStepIndex = steps.indexOf(currentStep);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.step) {
        setCurrentStep(event.state.step);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goToStep = useCallback(() => {
    const nextStep = steps[currentStepIndex + 1];
    if (nextStep) {
      window.history.pushState({ step: nextStep }, '');
      setCurrentStep(nextStep);
    } else {
      navigate(completePath);
    }
  }, [currentStepIndex, steps, navigate, completePath]);

  const goToPrevStep = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
    return <>{props.children}</>;
  };
  return {
    Funnel,
    Step,
    goToStep,
    goToPrevStep,
    currentStep,
    currentStepIndex,
    steps,
  };
};
