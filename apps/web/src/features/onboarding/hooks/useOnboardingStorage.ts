import { STORAGE_KEY } from '@entities/onboarding/model/constants';
import { useEffect } from 'react';
import { OnboardingForm } from '@entities/onboarding/model/types';

export const useOnboardingStorage = (allValues: OnboardingForm) => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
  }, [allValues]);
};
