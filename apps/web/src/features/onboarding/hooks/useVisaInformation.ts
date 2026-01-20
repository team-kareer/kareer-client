import { useEffect, useRef } from 'react';
import { useWatch, useFormContext } from 'react-hook-form';
import { type OnboardingForm } from '@entities/onboarding';

/**
 * 비자 정보 관련 로직을 관리하는 커스텀 훅
 * @returns 비자 정보 관련 상태
 * @property visaType - 현재 선택된 비자 타입
 * @property visaStartDate - 비자 발급일
 * @description 비자 타입 변경 시 필드 초기화 및 발급일 변경 시 만료일 재검증 로직 포함
 */
export const useVisaInformation = () => {
  const { control, resetField, trigger } = useFormContext<OnboardingForm>();

  const visaType = useWatch({
    control,
    name: 'visaType',
  });

  const visaStartDate = useWatch({
    control,
    name: 'visaStartDate',
  });

  const prevVisaTypeRef = useRef<string | undefined>(visaType);

  // 비자 타입이 변경될 때 이전 타입의 필드 데이터 초기화
  useEffect(() => {
    const preVisaType = prevVisaTypeRef.current;
    if (preVisaType && preVisaType !== visaType) {
      if (visaType === 'D-2') {
        resetField('visaPoint');
      } else if (visaType === 'D-10') {
        resetField('expectedGraduationDate');
      }
    }
    prevVisaTypeRef.current = visaType;
  }, [visaType, resetField]);

  // 발급일이 완전히 입력되었을 때만 만료일 재검증
  useEffect(() => {
    // YYYY-MM-DD 형식이 완성되었을 때만 검증
    const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(visaStartDate || '');
    if (isValidDateFormat) {
      trigger('visaExpiredAt');
    }
  }, [visaStartDate, trigger]);

  return {
    visaType,
    visaStartDate,
  };
};
