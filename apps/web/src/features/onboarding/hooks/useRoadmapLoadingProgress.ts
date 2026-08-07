import { useEffect, useState } from 'react';

const STEP_DURATION_MS = 5_000;

interface UseRoadmapLoadingProgressParams {
  stepCount: number;
  isRoadmapReady: boolean;
}

export const useRoadmapLoadingProgress = ({
  stepCount,
  isRoadmapReady,
}: UseRoadmapLoadingProgressParams) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const lastStepIndex = stepCount - 1;

  useEffect(() => {
    if (activeStepIndex === lastStepIndex) {
      return;
    }

    const timer = window.setTimeout(
      () => setActiveStepIndex((index) => index + 1),
      STEP_DURATION_MS,
    );

    return () => window.clearTimeout(timer);
  }, [activeStepIndex, lastStepIndex]);

  const isComplete = activeStepIndex === lastStepIndex && isRoadmapReady;

  return isComplete ? stepCount : activeStepIndex;
};
