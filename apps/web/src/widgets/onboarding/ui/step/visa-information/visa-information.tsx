import { useState } from 'react';
import { Autocomplete, Input } from '@kds/ui';

import { OnboardingStepTitle } from '@widgets/onboarding';

import * as styles from './visa-information.css';

const PLACEHOLDER = {
  ISSUANCE_DATE: 'Enter the Date',
  GRADUATION_DATE: 'Enter the Date',
  EXPIRATION_DATE: 'Enter the Date',
};

const VisaInformation = () => {
  const [visaType, setVisaType] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [issuanceDate, setIssuanceDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  return (
    <section>
      <OnboardingStepTitle stepNumber={2} title="Visa Information" />
      <div className={styles.inputContainer}>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Current Visa Type</p>
          <Autocomplete
            value={visaType}
            onChange={(value) => setVisaType(value)}
            options={[]}
          />
        </div>
        <div>
          <p className={styles.label}>Expected Graducation Date (YYYY.MM.DD)</p>
          <Input
            placeholder={PLACEHOLDER.GRADUATION_DATE}
            value={graduationDate}
            onChange={(e) => setGraduationDate(e.target.value)}
            status="default"
          />
        </div>
        <div>
          <p className={styles.label}>Visa Issuance Date (YYYY.MM.DD)</p>
          <Input
            placeholder={PLACEHOLDER.ISSUANCE_DATE}
            value={issuanceDate}
            onChange={(e) => setIssuanceDate(e.target.value)}
            status="default"
          />
        </div>
        <div>
          <p className={styles.label}>Visa Expiration Date (YYYY.MM.DD)</p>
          <Input
            placeholder={PLACEHOLDER.EXPIRATION_DATE}
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            status="default"
          />
        </div>
      </div>
    </section>
  );
};

export default VisaInformation;
