import { STORAGE_KEY } from './constants';

const COMPLETION_FLAG_KEY = 'onboarding-completed';

export const markOnboardingComplete = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(COMPLETION_FLAG_KEY, 'true');
  }
};

export const getLocalStorageData = () => {
  if (typeof window !== 'undefined') {
    const isCompleted = localStorage.getItem(COMPLETION_FLAG_KEY);

    if (isCompleted === 'true') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(COMPLETION_FLAG_KEY);
      return null;
    }

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
  }
  return null;
};

export const deleteLocalStorageData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(COMPLETION_FLAG_KEY);
  }
};
