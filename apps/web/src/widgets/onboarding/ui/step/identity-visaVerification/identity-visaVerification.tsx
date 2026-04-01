import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { OnboardingStepTitle } from '@widgets/onboarding';
import ImageUploadSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/image-upload-section/image-upload-section';
import UserInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/user-info-form-section/user-info-form-section';
import VisaInfoFormSection from '@widgets/onboarding/ui/step/identity-visaVerification/ui/visa-info-form-section/visa-info-form-section';

import * as styles from './identity-visaVerification.css';

const MAX_FILE_SIZE = 10 * 1000 * 1000;

type UploadState = {
  file?: File;
  errorMessage?: string;
};

const IdentityVisaVerification = () => {
  const { t } = useTranslation('onboarding');
  const [passportUpload, setPassportUpload] = useState<UploadState>({});
  const [visaUpload, setVisaUpload] = useState<UploadState>({});

  const getUploadState = (file: File): UploadState => {
    if (file.size > MAX_FILE_SIZE) {
      return {
        file: undefined,
        errorMessage: t('steps.identityVisaVerification.upload.fileSizeError'),
      };
    }

    return {
      file,
      errorMessage: undefined,
    };
  };

  return (
    <section className={styles.container}>
      <OnboardingStepTitle
        stepNumber={1}
        title={t('stepFlow.steps.identityVisaVerification')}
      />
      <div className={styles.formcontainer}>
        <div className={styles.formSection}>
          <ImageUploadSection
            title={t('steps.identityVisaVerification.upload.passport.title')}
            subtitle={t(
              'steps.identityVisaVerification.upload.passport.subtitle',
            )}
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
            title={t('steps.identityVisaVerification.upload.visaArc.title')}
            subtitle={t(
              'steps.identityVisaVerification.upload.visaArc.subtitle',
            )}
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
