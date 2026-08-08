import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ONBOARDING_MUTATION_OPTIONS } from '@features/onboarding';
import { USER_QUERY_KEY } from '@entities/user/queries';

interface UseOnboardingSubmitProps {
  goToNextStep: () => void;
}

const useOnboardingSubmit = ({ goToNextStep }: UseOnboardingSubmitProps) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  // 로드맵 생성 mutation
  const { mutate: generateRoadmap } = useMutation({
    ...ONBOARDING_MUTATION_OPTIONS.POST_AI_ROADMAP(),
  });

  const { mutate: submitOnboarding } = useMutation({
    ...ONBOARDING_MUTATION_OPTIONS.POST_ONBOARDING_FORM(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: USER_QUERY_KEY.USER_COMPLETION(),
      });
      // 온보딩 성공 후 로드맵 생성 API 호출
      generateRoadmap();
      goToNextStep();
    },
    onError: (submitError) => {
      setError(
        submitError instanceof Error
          ? submitError
          : new Error('온보딩 제출 실패'),
      );
    },
  });

  return { submitOnboarding };
};

export default useOnboardingSubmit;
