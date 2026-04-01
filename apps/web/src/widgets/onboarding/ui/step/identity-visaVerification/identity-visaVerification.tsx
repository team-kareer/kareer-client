import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { OnboardingStepTitle } from '@widgets/onboarding';
import ImageUploadSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/image-upload-section/image-upload-section';
import UserInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/user-info-form-section/user-info-form-section';
import VisaInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/visa-info-form-section/visa-info-form-section';
import {
  ONBOARDING_MUTATION_OPTIONS,
  UploadProgress,
  VisaType,
} from '@features/onboarding';
import { FUNNEL_STEPS, OnboardingForm } from '@entities/onboarding';

import * as styles from './identity-visaVerification.css';

const MAX_FILE_SIZE = 10 * 1000 * 1000;
const FILE_SIZE_ERROR_MESSAGE = 'Maximum file size: 10MB';

type UploadState = {
  file?: File;
  errorMessage?: string;
};

const VISA_TYPE_MAP: Record<string, VisaType | ''> = {
  D2: 'D-2',
  D10: 'D-10',
} as const;

const IdentityVisaVerification = () => {
  const { setValue } = useFormContext<OnboardingForm>();

  const transformVisaType = (serverValue: string): VisaType | '' => {
    return (serverValue && VISA_TYPE_MAP[serverValue]) || '';
  };

  const { mutate: submitPassportFile } = useMutation({
    ...ONBOARDING_MUTATION_OPTIONS.POST_OCR_PASSPORT(),
    onSuccess: (data) => {
      setValue('name', data.data?.fullName ?? '');
      setValue('countryCode', data.data?.country ?? '');
      setValue('birthDate', data.data?.birthDate ?? '');
    },
  });
  const { mutate: submitVisaFile } = useMutation({
    ...ONBOARDING_MUTATION_OPTIONS.POST_OCR_VISA(),
    onSuccess: (data) => {
      setValue('visaType', transformVisaType(data.data?.visaType ?? ''));
      setValue('visaStartDate', data.data?.visaStartDate ?? '');
      setValue('visaExpiredAt', data.data?.visaExpiredAt ?? '');
    },
  });

  const [passportUpload, setPassportUpload] = useState<UploadState>({});
  const [visaUpload, setVisaUpload] = useState<UploadState>({});

  const getUploadState = (file: File): UploadState => {
    if (file.size > MAX_FILE_SIZE) {
      return {
        file: undefined,
        errorMessage: FILE_SIZE_ERROR_MESSAGE,
      };
    }

    return {
      file,
      errorMessage: undefined,
    };
  };

  const [visaProgress, setVisaProgress] = useState<UploadProgress>();

  const handleSelectVisa = (file: File) => {
    const state = getUploadState(file);
    setVisaUpload(state);
    if (!state.file) {
      return;
    }

    submitVisaFile({
      file,
      onProgress: (progress) => {
        setVisaProgress(progress);
      },
    });
  };

  const handleSelectPassport = (file: File) => {
    const state = getUploadState(file);
    setPassportUpload(state);
    if (!state.file) {
      return;
    }
    submitPassportFile(file);
  };

  return (
    <section className={styles.container}>
      <OnboardingStepTitle stepNumber={1} title={FUNNEL_STEPS[0]} />
      <div className={styles.formcontainer}>
        <div className={styles.formSection}>
          <ImageUploadSection
            title="Upload Passport"
            subtitle="Up to 1 files · 10 MB max"
            file={passportUpload.file}
            errorMessage={passportUpload.errorMessage}
            onSelectFile={handleSelectPassport}
            onRemoveFile={() => setPassportUpload({})}
          />
          <UserInfoFormSection />
        </div>

        <hr className={styles.divider} />

        <div className={styles.formSection}>
          <ImageUploadSection
            title="Upload Visa or ARC"
            subtitle="Up to 1 files · 10 MB max"
            file={visaUpload.file}
            progress={visaProgress}
            errorMessage={visaUpload.errorMessage}
            onSelectFile={handleSelectVisa}
            onRemoveFile={() => setVisaUpload({})}
          />
          <VisaInfoFormSection />
        </div>
      </div>
    </section>
  );
};

export default IdentityVisaVerification;
