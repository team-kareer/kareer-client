import { END_POINT, GetUserCompletion } from '@entities/user/model';
import { api } from '@shared/apis/configs/instance';

export const getUserCompletion = async () => {
  const response = await api
    .get(END_POINT.USER.GET_USER_COMPLETION)
    .json<GetUserCompletion>();
  return response.data;
};
