import { Button, Checkbox } from '@kds/ui';

import { AccordionList, useTermsCheck } from '@widgets/terms-agreement';

import * as styles from './terms-agreement-page.css';

// TODO: api response값으로 대체
const dataset = [
  {
    termId: 1,
    required: true,
    title: '[Required] Terms of Service',
    content:
      '1. Purpos\n   •  The purpose of these Terms and Conditions is to stipulate the rights, obligations, and responsibilities between Bong Company Inc. (hereinafter referred to as the "Company") and the Member regarding the use of the Kareer service (hereinafter referred to as the "Service").\n\n2. Definitions\n   •  "Service" refers to the AI-based visa diagnosis, career roadmap, job matching, and related services provided by the Company.\n   •  "Member" refers to an individual who agrees to these terms and provides personal information to use the Service.\n   •  "OCR" refers to Optical Character Recognition technology used to extract text information from identification documents.\n\n3. Contents and Limitations of Service\n   •  The Company diagnoses the possibility of visa issuance based on the Member\'s information via AI algorithms.\n   •  [Important] The diagnosis results and roadmaps provided by this Service are for reference only and DO NOT guarantee legal visa issuance.\n   •  The final authority for visa issuance lies with the Ministry of Justice of the Republic of Korea, and the Company is not legally responsible for visa rejections.\n\n4. Execution of Agreement\n   •  The Service Agreement is executed when a Member agrees to the terms, applies for membership according to the Company\'s procedures, and the Company approves the application.\n\n5. Termination and Restriction\n   •  A Member may request termination of the agreement (withdrawal) at any time through the settings menu, and the Company shall process it immediately in accordance with relevant laws.',
  },
  {
    termId: 2,
    required: true,
    title: '[Required] Consent to Collection and Use of Personal Information',
    content:
      '1. Items Collected\n   •  The Company collects the following personal information for service provision:\n   •  Basic Info: Name, Email, Password, Nationality, Gender, Date of Birth.\n   •  Academic Info: University, Major, GPA, Admission Date, Expected Graduation Date.\n   •  Language Proficiency: TOPIK Score, KIIP Completion Status.\n   •  Auto-Collected: Device Info, Service Usage Records, Access Logs, Cookies.\n\n2. Purpose of Collection and Use\n   •  Service Provision: Generating AI career roadmaps, Recommending customized job postings.\n   •  Member Management: Identity verification, Prevention of fraudulent use.\n   •  Function Execution: Automatic data entry using OCR technology.\n\n3. Retention and Use Period\n   •  Retained and used until membership withdrawal. However, if preservation is required by relevant laws, it will be kept for the specified period.',
  },
  {
    termId: 3,
    required: true,
    title:
      '[Required] Consent to Processing of Unique Identification Information',
    content:
      "1. Purpose of Collection and Use\n   •  Visa Suitability Diagnosis: To precisely compare the Member's status with the Ministry of Justice visa requirements (D-2, D-10, E-7, etc.).\n   •  Identity Verification: To verify real names and prevent duplicate accounts.\n\n2. Items Collected\n   •  Alien Registration Number (ARC / Residence Card No.)\n   •  Passport Number\n\n3. Retention and Use Period\n   •  Until membership withdrawal.\n   •  (Note) Data extracted via OCR is encrypted and stored in the DB, but the scanned ID image file itself is permanently deleted from the server immediately after text extraction.\n\n4. Right to Refuse\n   •  You have the right to refuse the collection of unique identification information. However, if you refuse, you cannot use the Visa Diagnosis and Roadmap services.",
  },
  {
    termId: 4,
    required: true,
    title: '[Required] Consent to Collection and Use of Sensitive Information',
    content:
      '1. Items Collected\n   •  Current Visa Status, Stay Expiration Date.\n   •  Past Visa Application/Rejection History (if entered).\n   •  Academic Disciplinary History (for checking visa disqualification reasons).\n\n2. Purpose of Collection and Use\n   •  Precise diagnosis of E-7 visa issuance probability and screening for disqualification reasons.\n   •  Providing Visa Expiration Alert Service.\n\n3. Retention and Use Period\n   •  Until membership withdrawal.',
  },
  {
    termId: 5,
    required: true,
    title:
      '[Required] Consent to Consignment of Personal Information Processing',
    content:
      '   •  Bong Company Inc. consigns personal information processing tasks to external professional companies as follows to provide smooth service.\n   •  Upon consignment contract, compliance with personal information protection laws and the prohibition of providing personal information to third parties are clearly stipulated.\n\n1. Consignee: AWS (Amazon Web Services)\n   •  Consigned Task: Cloud server operation and data storage\n   •  Overseas Transfer of Personal Information: N/A (Seoul Region)\n\n2. Consignee: Google Cloud Vision\n   •  Consigned Task: Text extraction from ID image (OCR)\n   •  Overseas Transfer of Personal Information: May be transferred (US)',
  },
  {
    termId: 6,
    required: false,
    title: '[Optional] Consent to Receive Marketing Information',
    content:
      '1.Purpose of Collection and Use\n   •  Sending AI-recommended customized job alerts (Internship/Entry-level).\n   •  Updates on visa-related news and legal changes.\n   •  Kareer events and promotional benefits.\n\n2. Methods of Transmission\n   •  App Push Notifications, Email, SMS.\n\n3. Retention and Use Period\n   •  Until membership withdrawal or withdrawal of consent\n\n4. Right to Refuse\n   •  You may refuse to consent to receive marketing information. Even if you refuse, you can use basic services (like Visa Diagnosis), but you will not receive Customized Job Alerts.\n   •  (Note: We do not send advertising notifications during night hours: 21:00 ~ 08:00 KST).',
  },
];

const TermsAgreementPage = () => {
  const { checkedItems, allChecked, handleToggleAll, handleToggleItem } =
    useTermsCheck(dataset);

  const canSubmit = dataset
    .filter((data) => data.required)
    .every((data) => checkedItems[data.termId]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <header className={styles.header}>Terms & Privacy Consent</header>
        <div className={styles.termsSection}>
          <div className={styles.sectionContent}>
            <div className={styles.checkArea}>
              <Checkbox isChecked={allChecked} onClick={handleToggleAll} />
              <span>Agree to all</span>
            </div>
            <hr className={styles.line} />
            <section className={styles.termsList}>
              <AccordionList
                terms={dataset}
                checkedItems={checkedItems}
                onToggle={handleToggleItem}
              />
            </section>
          </div>
        </div>
      </div>
      <Button preset="large_primary" disabled={!canSubmit}>
        Agree and Start
      </Button>
    </div>
  );
};

export default TermsAgreementPage;
