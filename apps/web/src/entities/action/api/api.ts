import { Action } from '../types/types';
import { mockActions } from './mock';

export const getActions = async (): Promise<Action[]> => {
  return new Promise((res) => {
    res(mockActions);
  });
};
