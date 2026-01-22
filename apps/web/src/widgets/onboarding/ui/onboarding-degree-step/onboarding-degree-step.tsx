import { ReactNode, useEffect, useRef } from 'react';
import { Autocomplete, Button, Tab, useTabContext } from '@kds/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import {
  type OnboardingForm,
  OUTSIDE_KOREA_DEGREE_OPTIONS,
  SOUTH_KOREA_DEGREE_OPTIONS,
} from '@entities/onboarding';

import * as styles from './onboarding-degree-step.css';

const DEFAULT_DEGREE_LOCATION = 'south-korea';

const getDegreeOptions = (degreeLocation: string) =>
  degreeLocation === 'south-korea'
    ? SOUTH_KOREA_DEGREE_OPTIONS
    : OUTSIDE_KOREA_DEGREE_OPTIONS;

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
}: {
  field: { value: string; onChange: (value: string) => void };
  options: string[];
  degreeLocation: string;
}) => {
  const displayValue = field.value || '';

  return (
    <Autocomplete
      placeholder="Select the degree"
      value={displayValue}
      onChange={(label) => {
        // 타이핑 중에도 입력 허용, 옵션 선택 시에만 검증
        field.onChange(label);
      }}
      options={options}
    />
  );
};

const OnboardingDegreeStep = () => {
  const { control, resetField } = useFormContext<OnboardingForm>();

  const degreeLocation =
    useWatch({
      control,
      name: 'degreeLocation',
    }) || DEFAULT_DEGREE_LOCATION;

  const prevDegreeLocationRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (
      prevDegreeLocationRef.current &&
      prevDegreeLocationRef.current !== degreeLocation
    ) {
      resetField('degree');
    }
    prevDegreeLocationRef.current = degreeLocation;
  }, [degreeLocation, resetField]);

  const options = getDegreeOptions(degreeLocation);

  return (
    <Tab.Container initialValue={degreeLocation}>
      <TabSync degreeLocation={degreeLocation} />
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
            degreeLocation={degreeLocation}
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
