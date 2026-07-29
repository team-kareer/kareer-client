import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  createStepData,
  EducationStep,
  LanguageSkillStep,
  OnboardingStepLayout,
  PersonalBackgroundStep,
} from '@widgets/onboarding';
import CareerPreference from '@widgets/onboarding/ui/step/career-preference/career-preference';
import IdentityVisaVerification from '@widgets/onboarding/ui/step/identity-visaVerification/identity-visaVerification';
import type { PostOnboardingForm } from '@features/onboarding';
import {
  convertFormToRequest,
  DEFAULT_ONBOARDING_FORM,
  FUNNEL_STEPS,
  OnboardingForm,
} from '@entities/onboarding';
import useFunnel from '@shared/hooks/usefunnel';

import useOnboardingStepValidation from './hooks/useOnboardingStepValidation';
import useOnboardingSubmit from './hooks/useOnboardingSubmit';

const OnboardingPage = () => {
  const { t } = useTranslation('onboarding');
  const { Funnel, Step, goToNextStep, goToPrevStep, currentStepIndex } =
    useFunnel(FUNNEL_STEPS, '/');

  const form = useForm<OnboardingForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_ONBOARDING_FORM,
  });

  const { requiredFields, isNextDisabled } = useOnboardingStepValidation({
    form,
    currentStepIndex,
  });

  const { submitOnboarding } = useOnboardingSubmit({ goToNextStep });

  const steps = createStepData(
    [
      t('stepFlow.steps.identityVisaVerification'),
      t('stepFlow.steps.education'),
      t('stepFlow.steps.languageSkills'),
      t('stepFlow.steps.careerPreferences'),
      t('stepFlow.steps.background'),
    ],
    currentStepIndex,
  );

  const handleBack = () => {
    goToPrevStep();
  };

  const handleNext = async () => {
    const isValid = await form.trigger(requiredFields);
    if (isValid) {
      const isLastStep = currentStepIndex === FUNNEL_STEPS.length - 1;
      if (isLastStep) {
        const formData = form.getValues();
        const requestData = convertFormToRequest(
          formData,
        ) as PostOnboardingForm;
        submitOnboarding(requestData);
      } else {
        goToNextStep();
      }
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
            <IdentityVisaVerification />
          </Step>
          <Step name={FUNNEL_STEPS[1]}>
            <EducationStep />
          </Step>
          <Step name={FUNNEL_STEPS[2]}>
            <LanguageSkillStep />
          </Step>
          <Step name={FUNNEL_STEPS[3]}>
            <CareerPreference />
          </Step>
          <Step name={FUNNEL_STEPS[4]}>
            <PersonalBackgroundStep />
          </Step>
        </Funnel>
      </OnboardingStepLayout>
    </FormProvider>
  );
};

export default OnboardingPage;
