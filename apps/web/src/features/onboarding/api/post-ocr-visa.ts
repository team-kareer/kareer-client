import type { PostOcrVisaResponse } from '@features/onboarding';
import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

export const postOcrVisa = async (file: File): Promise<PostOcrVisaResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api
    .post(END_POINT.ONBOARDING.POST_OCR_VISA, {
      body: formData,
      // TODO: UploadProgress 로직 수정 - HTTP/2 환경에서만 동작
      // onUploadProgress: (progress) => {
      //   onProgress({
      //     done: progress.transferredBytes,
      //     total: progress.totalBytes,
      //   });
      // },
    })
    .json<PostOcrVisaResponse>();
  return response;
};
