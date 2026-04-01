import type { PostOcrPassportResponse } from '@features/onboarding';
import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

export const postOcrPassport = async (
  file: File,
): Promise<PostOcrPassportResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api
    .post(END_POINT.ONBOARDING.POST_OCR_PASSPORT, { body: formData })
    .json<PostOcrPassportResponse>();
  return response;
};
