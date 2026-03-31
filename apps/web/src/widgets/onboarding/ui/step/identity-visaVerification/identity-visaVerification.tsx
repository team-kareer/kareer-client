import { useState } from 'react';

import { OnboardingStepTitle } from '@widgets/onboarding';
import ImageUploadSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/image-upload-section/image-upload-section';
import UserInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/user-info-form-section/user-info-form-section';
import VisaInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/visa-info-form-section/visa-info-form-section';
import { FUNNEL_STEPS } from '@entities/onboarding';

import * as styles from './identity-visaVerification.css';

const MAX_FILE_SIZE = 10 * 1000 * 1000;
const FILE_SIZE_ERROR_MESSAGE = 'Maximum file size: 10MB';

type UploadState = {
  file?: File;
  errorMessage?: string;
};

const IdentityVisaVerification = () => {
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
            onSelectFile={(file) => setPassportUpload(getUploadState(file))}
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
            errorMessage={visaUpload.errorMessage}
            onSelectFile={(file) => setVisaUpload(getUploadState(file))}
            onRemoveFile={() => setVisaUpload({})}
          />
          <VisaInfoFormSection />
        </div>
      </div>
    </section>
  );
};

export default IdentityVisaVerification;
