import type { PostOnboardingForm } from '@features/onboarding';
import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

export const postOnboardingForm = async (form: PostOnboardingForm) => {
  const response = await api
    .post(END_POINT.ONBOARDING.POST_ONBOARDING, {
      json: form,
    })
    .json();
  return response;
};
