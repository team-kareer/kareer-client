import { STORAGE_KEY } from './constants';

export const getLocalStorageData = () => {
  if (typeof window !== 'undefined') {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
  }
  return null;
};
