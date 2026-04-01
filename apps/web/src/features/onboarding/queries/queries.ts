import { mutationOptions } from '@tanstack/react-query';

import {
  FileUploadParams,
  postAiRoadMap,
  postOcrPassport,
  postOcrVisa,
  postOnboardingForm,
} from '@features/onboarding';

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
  POST_OCR_VISA: () => {
    return mutationOptions({
      mutationFn: (params: FileUploadParams) => postOcrVisa(params),
    });
  },
  POST_OCR_PASSPORT: () => {
    return mutationOptions({
      mutationFn: (file: File) => postOcrPassport(file),
    });
  },
};
