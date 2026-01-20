import { useEffect } from 'react';

import { type OnboardingForm } from '@entities/onboarding';
import { STORAGE_KEY } from '@entities/onboarding/model/constants';

export const useOnboardingStorage = (allValues: OnboardingForm) => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
  }, [allValues]);
};
