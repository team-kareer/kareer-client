import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

/**
 * @param steps - 각 스텝을 식별할 문자열 배열.
 * @param completePath - 퍼널 완료 후 이동할 경로
 *
 * @returns
 * - goToNextStep : 다음 스텝 이동
 * - goToPrevStep : 이전 스텝 이동
 * - Funnel : 현재 스텝에 해당하는 컴포넌트 렌더링 컴포넌트
 * - Step : 단순 children 렌더링 컴포넌트
 * - currentStep : 현재 스텝
 * - currentStepIndex : 현재 스텝 인덱스 번호
 * - steps : 전체 스텝 배열
 */

const useFunnel = (steps: readonly string[], completePath: string) => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(steps[0] ?? '');
  const currentStepIndex = steps.indexOf(currentStep);

  useEffect(() => {
    if (!window.history.state?.step) {
      window.history.replaceState({ step: steps[0] }, '');
    }
  }, [steps]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.step) {
        setCurrentStep(event.state.step);
      } else {
        setCurrentStep(steps[0] ?? '');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [steps]);

  const goToNextStep = () => {
    const nextStep = steps[currentStepIndex + 1];
    if (nextStep) {
      window.history.pushState({ step: nextStep }, '');
      setCurrentStep(nextStep);
    } else {
      navigate(completePath);
    }
  };

  const goToPrevStep = () => {
    const prevStep = steps[currentStepIndex - 1];
    if (prevStep) {
      window.history.pushState({ step: prevStep }, '');
      setCurrentStep(prevStep);
    }
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = Children.toArray(children).find((child) => {
      if (!isValidElement<StepProps>(child)) {
        return false;
      }
      return child.props.name === currentStep;
    });
    return targetStep;
  };
  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };
  return {
    Funnel,
    Step,
    goToNextStep,
    goToPrevStep,
    currentStep,
    currentStepIndex,
    steps,
  };
};

export default useFunnel;
