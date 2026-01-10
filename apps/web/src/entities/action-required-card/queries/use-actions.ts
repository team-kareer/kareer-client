import { useQuery } from '@tanstack/react-query';
import { getActions } from '../api/api';
import { Action } from '../types/types';

export const useActions = () => {
  return useQuery<Action[]>({
    queryKey: ['actions'],
    queryFn: getActions,
  });
};
