import { useState } from 'react';
import { ChangeEvent } from 'react';
import { BangCircleIcon } from '@kds/icons';

import { OnboardingStepTitle } from '@widgets/onboarding';
import { TextField } from '@shared/ui/text-field/text-field';

import * as styles from './personal-background.css';

const MAX_LENGTH = 1000;

const PLACEHOLDER =
  'e.g : I built a campus delivery app using React and Spring Boot for my Capstone project. I manage my GitHub actively and placed 2nd in a university hackathon. I also worked as a back-end intern at a fintech startup and hold an Engineer Information Processing certification.         ';

const INFO_MESSAGES = [
  'For your privacy, please avoid sharing sensitive information (e.g. ID numbers, passport details, or bank account information)',
  'This information is self-described by you and used only as a reference for AI guidance. It is not used for any legal, official, or immigration decisions',
] as const;

const TITLE =
  'Share anything that might help us better understand your situation and goals.';
const DESCRIPTION =
  'This helps us tailor your career roadmap and recommendations.';

const PersonalBackground = () => {
  const [text, setText] = useState('');
  return (
    <section>
      <OnboardingStepTitle stepNumber={4} title="Personal Background" />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{TITLE}</h2>
          <p className={styles.description}>{DESCRIPTION}</p>
        </div>
        <div className={styles.textAreaWrapper}>
          <TextField
            placeholder={PLACEHOLDER}
            value={text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            maxLength={MAX_LENGTH}
            showCount={true}
          />
        </div>
        <div className={styles.infoContainer}>
          {INFO_MESSAGES.map((message, index) => (
            <div key={index} className={styles.intoText}>
              <span className={styles.iconWrapper}>
                <BangCircleIcon />
              </span>
              <p className={styles.infoText}>{message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
