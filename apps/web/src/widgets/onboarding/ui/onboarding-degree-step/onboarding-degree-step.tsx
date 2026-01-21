import { ReactNode, useEffect, useRef, useState } from 'react';
import { Autocomplete, Button, Tab, useTabContext } from '@kds/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import {
  getDegreeLabel,
  getDegreeValue,
  type OnboardingForm,
  OUTSIDE_KOREA_DEGREE_OPTIONS,
  SOUTH_KOREA_DEGREE_OPTIONS,
} from '@entities/onboarding';

import * as styles from './onboarding-degree-step.css';

const DegreeLocationButton = ({
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

// 입력값 상태 관리 컴포넌트
const DegreeInput = ({
  field,
  options,
  degreeLocation,
}: {
  field: { value: string; onChange: (value: string) => void };
  options: string[];
  degreeLocation: string;
}) => {
  const displayValue = field.value ? getDegreeLabel(field.value) : '';
  const [inputValue, setInputValue] = useState(displayValue);

  // 폼 값이 변경되면 입력값 동기화
  useEffect(() => {
    setInputValue(displayValue);
  }, [displayValue]);

  return (
    <Autocomplete
      placeholder="Select the degree"
      value={inputValue}
      onChange={(label) => {
        setInputValue(label);
        if (options.includes(label)) {
          const apiValue = getDegreeValue(
            label,
            degreeLocation || 'south-korea',
          );
          field.onChange(apiValue);
        }
      }}
      options={options}
    />
  );
};

const OnboardingDegreeStep = () => {
  const { control, resetField, setValue } = useFormContext<OnboardingForm>();

  const degreeLocation = useWatch({
    control,
    name: 'degreeLocation',
  });

  const prevDegreeLocationRef = useRef<string | undefined>(degreeLocation);

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
        render={({ field }) => (
          <DegreeInput
            field={field}
            options={options}
            degreeLocation={degreeLocation || 'south-korea'}
          />
        )}
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
