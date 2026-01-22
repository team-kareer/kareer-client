import { useEffect, useRef } from 'react';

import { type OnboardingForm, STORAGE_KEY } from '@entities/onboarding';

export const useOnboardingStorage = (allValues: OnboardingForm) => {
  const prevValuesRef = useRef<string>('');
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    const currentValues = JSON.stringify(allValues);
    const hasValues = Object.values(allValues).some(
      (value) =>
        value !== '' && value !== 0 && value !== null && value !== undefined,
    );
    if (hasValues && prevValuesRef.current !== currentValues) {
      localStorage.setItem(STORAGE_KEY, currentValues);
      prevValuesRef.current = currentValues;
    }
  }, [allValues]);
};
