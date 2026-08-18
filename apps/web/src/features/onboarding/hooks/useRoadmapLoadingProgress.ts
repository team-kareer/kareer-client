import { useEffect, useState } from 'react';

const STEP_DURATION_MS = 5_000;

interface UseRoadmapLoadingProgressParams {
  stepCount: number;
  isRoadmapReady: boolean;
  startedAt: number;
}

export const useRoadmapLoadingProgress = ({
  stepCount,
  isRoadmapReady,
  startedAt,
}: UseRoadmapLoadingProgressParams) => {
  const [currentTime, setCurrentTime] = useState(() => Date.now());
  const lastStepIndex = stepCount - 1;
  const elapsedTime = Math.max(currentTime - startedAt, 0);
  const activeStepIndex = Math.min(
    Math.floor(elapsedTime / STEP_DURATION_MS),
    lastStepIndex,
  );

  useEffect(
    function scheduleNextRoadmapLoadingStep() {
      if (activeStepIndex === lastStepIndex) {
        return;
      }

      const nextStepStartedAt =
        startedAt + (activeStepIndex + 1) * STEP_DURATION_MS;
      const remainingTime = Math.max(nextStepStartedAt - Date.now(), 0);
      const timer = window.setTimeout(
        () => setCurrentTime(Date.now()),
        remainingTime,
      );

      return () => window.clearTimeout(timer);
    },
    [activeStepIndex, lastStepIndex, startedAt],
  );

  const isComplete = activeStepIndex === lastStepIndex && isRoadmapReady;

  return isComplete ? stepCount : activeStepIndex;
};
