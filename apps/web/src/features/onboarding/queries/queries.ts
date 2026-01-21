import { mutationOptions } from '@tanstack/react-query';

import { postAiRoadMap, postOnboardingForm } from '@features/onboarding';

export const ONBOARDING_MUTATION_OPTIONS = {
  POST_ONBOARDING_FORM: () => {
    return mutationOptions({
      mutationFn: postOnboardingForm,
    });
  },
  POST_AI_ROADMAP: () => {
    return mutationOptions({
      mutationFn: postAiRoadMap,
    });
  },
};
