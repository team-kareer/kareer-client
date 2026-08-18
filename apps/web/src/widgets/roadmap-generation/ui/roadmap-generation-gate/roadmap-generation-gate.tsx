import { type ReactNode, useEffect, useState } from 'react';
import { useMutationState, useQuery } from '@tanstack/react-query';

import {
  ROADMAP_GENERATION_MUTATION_KEY,
  RoadmapLoadingCard,
} from '@features/onboarding';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { PageLoader } from '@shared/ui';

import * as styles from './roadmap-generation-gate.css';

interface RoadmapGenerationGateProps {
  children: ReactNode;
}

const RoadmapGenerationGate = ({ children }: RoadmapGenerationGateProps) => {
  const generationStates = useMutationState({
    filters: { mutationKey: ROADMAP_GENERATION_MUTATION_KEY },
    select: (mutation) => mutation.state,
  });
  const generationState = generationStates[generationStates.length - 1];
  const shouldFetchPhaseList =
    !generationState || generationState.status === 'success';
  const { data: phaseData } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST(),
    enabled: shouldFetchPhaseList,
    throwOnError: true,
  });
  const { data: userData } = useQuery({
    ...USER_QUERY_OPTIONS.GET_USER_INFO(),
  });
  const hasPhaseData = (phaseData?.phases ?? []).length > 0;
  const [isLoadingCardVisible, setIsLoadingCardVisible] = useState(false);
  const shouldStartLoadingCard = !hasPhaseData && Boolean(generationState);

  useEffect(
    function showRoadmapLoadingCard() {
      if (shouldStartLoadingCard) {
        setIsLoadingCardVisible(true);
      }
    },
    [shouldStartLoadingCard],
  );

  if (generationState?.status === 'error') {
    throw generationState.error;
  }

  if (isLoadingCardVisible || shouldStartLoadingCard) {
    return (
      <div className={styles.loadingCardContainer}>
        <RoadmapLoadingCard
          name={userData?.name ?? ''}
          isRoadmapReady={hasPhaseData}
          onExitComplete={() => setIsLoadingCardVisible(false)}
        />
      </div>
    );
  }

  if (!hasPhaseData) {
    return <PageLoader text="Please wait a bit..." />;
  }

  return <>{children}</>;
};

export default RoadmapGenerationGate;
