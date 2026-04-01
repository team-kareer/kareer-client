import { ReactNode, useEffect, useRef } from 'react';
import { Autocomplete, Button, Tab, useTabContext } from '@kds/ui';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { validateAutocompleteOption } from '@features/onboarding/model/validation';
import {
  type OnboardingForm,
  OUTSIDE_KOREA_DEGREE_OPTIONS,
  SOUTH_KOREA_DEGREE_OPTIONS,
} from '@entities/onboarding';

import * as styles from './onboarding-degree-step.css';

const DEFAULT_DEGREE_LOCATION = 'south-korea';

const DEGREE_LABEL_KEYS: Record<string, string> = {
  'Associate Degree': 'options.degree.associate',
  "Bachelor's Degree": 'options.degree.bachelors',
  "Master's Degree": 'options.degree.masters',
  'Doctoral(PhD)': 'options.degree.doctorate',
};

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

const OnboardingDegreeStep = () => {
  const { t } = useTranslation('onboarding');
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
  const degreeOptions = options.map((option) => ({
    code: option,
    label: t(DEGREE_LABEL_KEYS[option] ?? option),
  }));

  return (
    <Tab.Container initialValue={degreeLocation}>
      <TabSync degreeLocation={degreeLocation} />
      <Tab.List className={styles.buttonWrapper}>
        <DegreeLocationButton value="south-korea">
          <p>{t('degree.location.southKorea')}</p>
        </DegreeLocationButton>
        <DegreeLocationButton value="outside-korea">
          <p>{t('degree.location.outsideKorea')}</p>
        </DegreeLocationButton>
      </Tab.List>

      <Controller
        name="degree"
        control={control}
        rules={{
          required: t('degree.required'),
          validate: (value) => {
            const result = validateAutocompleteOption(value, degreeOptions);
            return result === true || result;
          },
        }}
        render={({ field }) => (
          <Autocomplete
            key={degreeLocation}
            placeholder={t('degree.placeholder')}
            value={field.value || ''}
            onChange={(label) => {
              field.onChange(label);
            }}
            options={degreeOptions}
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
