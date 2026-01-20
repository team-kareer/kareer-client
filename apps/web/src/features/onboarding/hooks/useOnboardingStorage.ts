import { useEffect, useRef } from 'react';

import { type OnboardingForm } from '@entities/onboarding';
import { STORAGE_KEY } from '@entities/onboarding/model/constants';

export const useOnboardingStorage = (allValues: OnboardingForm) => {
  const prevValuesRef = useRef<string>('');

  useEffect(() => {
    const currentValues = JSON.stringify(allValues);

    // 값이 실제로 변경된 경우에만 저장 (불필요한 저장 방지)
    if (prevValuesRef.current !== currentValues) {
      localStorage.setItem(STORAGE_KEY, currentValues);
      prevValuesRef.current = currentValues;
    }
  }, [allValues]);
};
