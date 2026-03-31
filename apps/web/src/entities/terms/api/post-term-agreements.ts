import {
  END_POINT,
  type PostTermAgreementsBody,
  type PostTermAgreementsResponse,
} from '@entities/terms/model';
import { api } from '@shared/apis/configs/instance';

export const postTermAgreements = async (
  body: PostTermAgreementsBody,
): Promise<PostTermAgreementsResponse> => {
  return api
    .post(END_POINT.TERMS.POST_TERM_AGREEMENTS, { json: body })
    .json<PostTermAgreementsResponse>();
};
