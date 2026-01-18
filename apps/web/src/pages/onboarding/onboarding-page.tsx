import { useEffect } from 'react';
import useFunnel from '@shared/hooks/usefunnel';
import { FormProvider, useForm } from 'react-hook-form';
import {
  type OnboardingForm,
  type OnboardingStepData,
  OnboardingStepLayout,
  PersonalBackgroundStep,
  PersonalInformationStep,
  TargetRoleStep,
  VisaInformationStep,
} from '@widgets/onboarding';

const STORAGE_KEY = 'onboarding-form-data';

// 폼 필드 초기값
const DEFAULT_VALUES: OnboardingForm = {
  name: '',
  birthDate: '',
  country: '',
  languageLevel: '',
  degreeLocation: 'south-korea',
  degree: '',
  visaType: '',
  expectedGraduationDate: '',
  visaStartDate: '',
  visaExpiredAt: '',
  visaPoint: 0,
  primaryMajor: '',
  secondaryMajor: '',
  targetJob: '',
  targetJobSkill: '',
  personalBackground: '',
};

// 스탭별 필수 필드
const STEP_REQUIRED_FIELDS: ReadonlyArray<ReadonlyArray<keyof OnboardingForm>> =
  [
    ['name', 'birthDate', 'country', 'languageLevel', 'degree'],
    ['visaType', 'expectedGraduationDate', 'visaStartDate', 'visaExpiredAt'],
    ['primaryMajor', 'targetJob'],
    ['personalBackground'],
  ] as const;

const OnboardingPage = () => {
  // Funnel 스텝 설정
  const FUNNEL_STEPS = [
    'PersonalInformation',
    'VisaInformation',
    'TargetRole',
    'Background',
  ] as const;

  // 스텝 타이틀
  const STEP_TITLES = [
    'Personal Information',
    'Visa Information',
    'Target Role',
    'Background',
  ];

  const { Funnel, Step, goToNextStep, goToPrevStep, currentStepIndex } =
    useFunnel(FUNNEL_STEPS, '/');

  const form = useForm<OnboardingForm>({
    mode: 'onChange', // 입력 시 실시간 검증
    reValidateMode: 'onChange', // 재검증도 입력 시
    defaultValues: async () => {
      if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
          const parsed = JSON.parse(savedData);
          // visaPoint가 0이면 빈 문자열로 변환
          if (parsed.visaPoint === 0 || parsed.visaPoint === '0') {
            parsed.visaPoint = '';
          }
          return parsed;
        }
      }
      return DEFAULT_VALUES;
    },
  });

  // 버튼 비활성화 로직
  const allValues = form.watch();
  let requiredFields = STEP_REQUIRED_FIELDS[currentStepIndex] ?? [];

  // 2번째 스텝(Visa Information)에서 비자 타입에 따라 필수 필드 동적 변경
  if (currentStepIndex === 1) {
    const visaType = allValues.visaType;
    if (visaType === 'D-2') {
      requiredFields = [
        'visaType',
        'expectedGraduationDate',
        'visaStartDate',
        'visaExpiredAt',
      ];
    } else if (visaType === 'D-10') {
      requiredFields = [
        'visaType',
        'visaPoint',
        'visaStartDate',
        'visaExpiredAt',
      ];
    } else {
      // 비자 타입이 선택되지 않았을 때는 기본 필드만
      requiredFields = ['visaType', 'visaStartDate', 'visaExpiredAt'];
    }
  }

  // 모든 필드 존재 체크
  const hasAllRequiredValues = requiredFields.every((fieldName) => {
    const value = allValues[fieldName];
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (typeof value === 'number') {
      return value !== 0 && !Number.isNaN(value);
    }
    return Boolean(value);
  });
  const hasStepErrors = requiredFields.some((fieldName) =>
    Boolean(form.formState.errors[fieldName]),
  );
  const isNextDisabled =
    form.formState.isLoading || !hasAllRequiredValues || hasStepErrors;

  // 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
  }, [allValues]);

  const steps: OnboardingStepData[] = STEP_TITLES.map((title, index) => ({
    stepNumber: index + 1,
    title,
    status:
      index < currentStepIndex
        ? 'Completed'
        : index === currentStepIndex
          ? 'In Progress'
          : index === currentStepIndex + 1
            ? 'Next'
            : 'Later',
  }));

  const handleBack = () => {
    goToPrevStep();
  };

  const handleNext = async () => {
    const isValid = await form.trigger(requiredFields);
    if (isValid) {
      goToNextStep();
    }
  };

  return (
    <FormProvider {...form}>
      <OnboardingStepLayout
        steps={steps}
        onBack={handleBack}
        onNext={handleNext}
        isNextDisabled={isNextDisabled}
      >
        <Funnel>
          <Step name={FUNNEL_STEPS[0]}>
            <PersonalInformationStep />
          </Step>
          <Step name={FUNNEL_STEPS[1]}>
            <VisaInformationStep />
          </Step>
          <Step name={FUNNEL_STEPS[2]}>
            <TargetRoleStep />
          </Step>
          <Step name={FUNNEL_STEPS[3]}>
            <PersonalBackgroundStep />
          </Step>
        </Funnel>
      </OnboardingStepLayout>
    </FormProvider>
  );
};

export default OnboardingPage;
