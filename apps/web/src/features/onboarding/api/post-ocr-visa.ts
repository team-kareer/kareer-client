import type { PostOcrVisaResponse } from '@features/onboarding';
import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

export const postOcrVisa = async (file: File): Promise<PostOcrVisaResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api
    .post(END_POINT.ONBOARDING.POST_OCR_VISA, {
      body: formData,
    })
    .json<PostOcrVisaResponse>();
  return response;
};
