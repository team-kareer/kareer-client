import { useState } from 'react';

import { OnboardingStepTitle } from '@widgets/onboarding';
import ImageUploadSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/image-upload-section/image-upload-section';
import UserInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/user-info-form-section/user-info-form-section';
import VisaInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/visa-info-form-section/visa-info-form-section';
import { FUNNEL_STEPS } from '@entities/onboarding';

import * as styles from './identity-visaVerification.css';

const IdentityVisaVerification = () => {
  const [passportFile, setPassportFile] = useState<File | undefined>();
  const [visaFile, setVisaFile] = useState<File | undefined>();

  return (
    <section className={styles.container}>
      <OnboardingStepTitle stepNumber={5} title={FUNNEL_STEPS[5]} />
      <div className={styles.formcontainer}>
        <div className={styles.formSection}>
          <ImageUploadSection
            title="Upload Passport"
            subtitle="Up to 1 files · 10 MB max"
            file={passportFile}
            onSelectFile={setPassportFile}
            onRemoveFile={() => setPassportFile(undefined)}
          />
          <UserInfoFormSection />
        </div>

        <hr className={styles.divider} />

        <div className={styles.formSection}>
          <ImageUploadSection
            title="Upload Visa or ARC"
            subtitle="Up to 1 files · 10 MB max"
            file={visaFile}
            onSelectFile={setVisaFile}
            onRemoveFile={() => setVisaFile(undefined)}
          />
          <VisaInfoFormSection />
        </div>
      </div>
    </section>
  );
};

export default IdentityVisaVerification;
