import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { BangCircleIcon } from '@kds/icons';

import { OnboardingForm, OnboardingStepTitle } from '@widgets/onboarding';
import { TextField } from '@shared/ui/text-field/text-field';

import * as styles from './personal-background.css';

const MAX_LENGTH = 1000;

// TargetJob별 Placeholder 매핑
const PLACEHOLDER_BY_TARGET_JOB: Record<string, string> = {
  'Business / Sales':
    "e.g. [Academic] In my 'Global Marketing' course, I analyzed consumer trends in my home country and presented an entry strategy for Korean appliances, earning an A+. [Professional] Later, as a trade intern, I managed email correspondence with buyers and assisted in preparing trade documents like Invoices.",
  Marketer:
    "e.g. [Academic] Conducted a survey of 100 international students for a 'Consumer Psychology' course to analyze K-brand awareness. [Professional] As a marketing intern, I managed local social media channels and improved post reach by 30% through data-driven targeting and localized content.",
  'Data Analyst':
    "e.g. [Academic] Developed a startup business model and designed risk management strategies using SWOT analysis in a 'Business Strategy' course. [Professional] During a field practicum, I organized inventory data to identify cost-saving opportunities and suggested streamlining report procedures.",
  Developer:
    "e.g. [Academic] In an 'Operations Management' course, I studied SCM principles and completed a simulation project on MRP using ERP systems. [Professional] During a manufacturing internship, I tracked inventory flow and analyzed supplier prices for cost reduction. I also updated quality checklists.",
};

const INFO_MESSAGES = [
  'For your privacy, please avoid sharing sensitive information (e.g. ID numbers, passport details, or bank account information)',
  'This information is self-described by you and used only as a reference for AI guidance. It is not used for any legal, official, or immigration decisions',
] as const;

const TITLE =
  'Share anything that might help us better understand your situation and goals.';
const DESCRIPTION =
  'This helps us tailor your career roadmap and recommendations.';

const PersonalBackground = () => {
  const { control } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
  });

  // TargetJob에 따른 placeholder 선택
  const placeholder =
    targetJob && PLACEHOLDER_BY_TARGET_JOB[targetJob]
      ? PLACEHOLDER_BY_TARGET_JOB[targetJob]
      : '';

  return (
    <section>
      <OnboardingStepTitle stepNumber={4} title="Personal Background" />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{TITLE}</h2>
          <p className={styles.description}>{DESCRIPTION}</p>
        </div>
        <div className={styles.textAreaWrapper}>
          <Controller
            name="personalBackground"
            control={control}
            rules={{ required: 'Enter your personal background' }}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  placeholder={placeholder}
                  value={field.value || ''}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    field.onChange(e.target.value)
                  }
                  maxLength={MAX_LENGTH}
                  showCount={true}
                />
              </>
            )}
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
