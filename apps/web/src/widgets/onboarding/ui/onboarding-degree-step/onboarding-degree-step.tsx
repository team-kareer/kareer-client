import { ReactNode, useEffect, useRef } from 'react';
import { Autocomplete, Button, Tab, useTabContext } from '@kds/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { type OnboardingForm } from '@entities/onboarding';

import * as styles from './onboarding-degree-step.css';

const OUTSIDE_KOREA_DEGREE_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  'Doctoral(PhD)',
];

const SOUTH_KOREA_DEGREE_OPTIONS = [
  'Associate Degree',
  ...OUTSIDE_KOREA_DEGREE_OPTIONS,
];

/**
 * @param value - API에서 받은 학위
 */
const getDegreeLabel = (value: string): string => {
  if (!value) {
    return '';
  }

  // SOUTHKOREA_ 또는 OUTSIDEKOREA_ 접두사 제거
  if (value.startsWith('SOUTHKOREA_')) {
    return value.replace('SOUTHKOREA_', '');
  }
  if (value.startsWith('OUTSIDEKOREA_')) {
    return value.replace('OUTSIDEKOREA_', '');
  }

  return value; // 접두사가 없으면 원본 값 반환
};

/**
 * 표시용 텍스트를 API 값으로 변환하는 함수
 * @returns {string} API에 전송할 형식의 값
 * @description 학위 지역에 따라 적절한 접두사를 추가하여 API 형식으로 변환
 */
const getDegreeValue = (label: string, degreeLocation: string): string => {
  const prefix =
    degreeLocation === 'south-korea' ? 'SOUTHKOREA_' : 'OUTSIDEKOREA_';
  return `${prefix}${label}`;
};

export const DegreeLocationButton = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const { setValue } = useFormContext<OnboardingForm>();

  const handleClick = () => {
    setSelectedTab(value);
    setValue('degreeLocation', value);
  };

  return (
    <Button
      preset={selectedTab === value ? 'mini_primary' : 'mini_outlined'}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

const OnboardingDegreeStep = () => {
  const { control, resetField, setValue } = useFormContext<OnboardingForm>();

  const degreeLocation = useWatch({
    control,
    name: 'degreeLocation',
  });

  const prevDegreeLocationRef = useRef<string | undefined>(degreeLocation);

  // 초기값 설정
  useEffect(() => {
    if (!degreeLocation) {
      setValue('degreeLocation', 'south-korea');
    }
  }, [degreeLocation, setValue]);

  // degreeLocation이 변경될 때 이전 degree 값 초기화
  useEffect(() => {
    const prevDegreeLocation = prevDegreeLocationRef.current;
    if (prevDegreeLocation && prevDegreeLocation !== degreeLocation) {
      resetField('degree');
    }
    prevDegreeLocationRef.current = degreeLocation;
  }, [degreeLocation, resetField]);

  const options =
    degreeLocation === 'south-korea'
      ? SOUTH_KOREA_DEGREE_OPTIONS
      : OUTSIDE_KOREA_DEGREE_OPTIONS;

  return (
    <Tab.Container initialValue={degreeLocation || 'south-korea'}>
      <TabSync degreeLocation={degreeLocation || 'south-korea'} />
      <Tab.List className={styles.buttonWrapper}>
        <DegreeLocationButton value="south-korea">
          <p>South Korea</p>
        </DegreeLocationButton>
        <DegreeLocationButton value="outside-korea">
          <p>Outside Korea</p>
        </DegreeLocationButton>
      </Tab.List>

      <Controller
        name="degree"
        control={control}
        rules={{ required: 'Select the degree' }}
        render={({ field }) => {
          const displayValue = field.value ? getDegreeLabel(field.value) : '';

          return (
            <Autocomplete
              placeholder="Select the degree"
              value={displayValue}
              onChange={(label) => {
                // 표시 텍스트를 API 값으로 변환하여 저장
                const apiValue = getDegreeValue(
                  label,
                  degreeLocation || 'south-korea',
                );
                field.onChange(apiValue);
              }}
              options={options}
            />
          );
        }}
      />
    </Tab.Container>
  );
};

// Tab 내부 상태를 form과 동기화하는 컴포넌트
const TabSync = ({ degreeLocation }: { degreeLocation: string }) => {
  const { setSelectedTab } = useTabContext();

  useEffect(() => {
    setSelectedTab(degreeLocation);
  }, [degreeLocation, setSelectedTab]);

  return null;
};

export default OnboardingDegreeStep;
