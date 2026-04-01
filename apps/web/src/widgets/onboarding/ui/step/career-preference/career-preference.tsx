import { Checkbox } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import {
  FormAutocompleteField,
  IndustryFieldChips,
  OnboardingStepTitle,
} from '@widgets/onboarding';
import { useIndustryField, useTargetJobSkills } from '@features/onboarding';
import { validateAutocompleteOption } from '@features/onboarding/model/validation';
import { TARGET_JOB_OPTIONS } from '@entities/onboarding';
import { FIELD_LIST_QUERY_OPTIONS } from '@entities/onboarding/qureies/queries';

import * as styles from './career-preference.css';

const TARGET_JOB_LABEL_KEYS: Record<string, string> = {
  Developer: 'options.targetJob.developer',
  'Data Analyst': 'options.targetJob.dataAnalyst',
  Marketer: 'options.targetJob.marketer',
  'Global Sales': 'options.targetJob.globalSales',
};

const JOB_SKILL_KEY_MAP: Record<string, Record<string, string>> = {
  Developer: {
    'tech-stack': 'techStack',
    'cs-tools': 'csTools',
    projects: 'projects',
    'team-work-experience': 'teamWorkExperience',
  },
  'Data Analyst': {
    'data-tools': 'dataTools',
    'sql-programming': 'sqlProgramming',
    'analysis-storytelling': 'analysisStorytelling',
    projects: 'projects',
  },
  Marketer: {
    'channels-tools': 'channelsTools',
    'content-copy': 'contentCopy',
    'data-experimentation': 'dataExperimentation',
    projects: 'projects',
  },
  'Global Sales': {
    'client-communication': 'clientCommunication',
    'sales-tools-process': 'salesToolsProcess',
    'numbers-targets': 'numbersTargets',
    projects: 'projects',
  },
};

const JOB_SKILL_GROUP_KEYS: Record<string, string> = {
  Developer: 'developer',
  'Data Analyst': 'dataAnalyst',
  Marketer: 'marketer',
  'Global Sales': 'globalSales',
};

const CareerPreference = () => {
  const { t } = useTranslation('onboarding');
  const { data: fieldList } = useQuery({
    ...FIELD_LIST_QUERY_OPTIONS.GET_FIELD_LIST(),
  });

  const {
    selectedFields,
    availableOptions,
    handleSelectField,
    handleRemoveField,
  } = useIndustryField(fieldList?.fields || []);

  const { targetJob, selectedSkills, currentJobSkills, handleSkillToggle } =
    useTargetJobSkills();
  const targetJobOptions = TARGET_JOB_OPTIONS.map((option) => ({
    code: option,
    label: t(TARGET_JOB_LABEL_KEYS[option] ?? option),
  }));

  return (
    <section>
      <OnboardingStepTitle
        stepNumber={4}
        title={t('stepFlow.steps.careerPreferences')}
      />
      <div className={styles.inputContainer}>
        <div className={styles.leftSection}>
          <FormAutocompleteField
            icon="search"
            name="fieldsOfInterests"
            label={t('steps.careerPreferences.fields.fieldsOfInterests.label')}
            rules={{
              validate: (value: string[]) =>
                value?.length > 0 ||
                t('steps.careerPreferences.fields.fieldsOfInterests.required'),
            }}
            placeholder={t(
              'steps.careerPreferences.fields.fieldsOfInterests.placeholder',
            )}
            options={availableOptions}
            onSelect={handleSelectField}
          />
          <FormAutocompleteField
            name="targetJob"
            label={t('steps.careerPreferences.fields.targetJob.label')}
            rules={{
              required: t('steps.careerPreferences.fields.targetJob.required'),
              validate: (value) =>
                validateAutocompleteOption(value, targetJobOptions),
            }}
            placeholder={t(
              'steps.careerPreferences.fields.targetJob.placeholder',
            )}
            options={targetJobOptions}
          />
        </div>
        {selectedFields.length > 0 && (
          <div className={styles.rightSection}>
            <IndustryFieldChips
              fields={selectedFields}
              onRemove={handleRemoveField}
            />
          </div>
        )}
      </div>

      {targetJob && (
        <div className={styles.checkboxContainer}>
          {currentJobSkills.map((skill) => (
            <div
              key={skill.id}
              className={styles.checkboxWrapper}
              onClick={() => handleSkillToggle(skill.id)}
            >
              <Checkbox
                isChecked={selectedSkills.includes(skill.id)}
                onChange={() => handleSkillToggle(skill.id)}
              />
              <div className={styles.checkboxContent}>
                <h3 className={styles.checkboxTitle}>
                  {t(
                    `jobSkills.${JOB_SKILL_GROUP_KEYS[targetJob]}.${JOB_SKILL_KEY_MAP[targetJob]?.[skill.id]}.title`,
                  )}
                </h3>
                <p className={styles.checkboxDescription}>
                  {t(
                    `jobSkills.${JOB_SKILL_GROUP_KEYS[targetJob]}.${JOB_SKILL_KEY_MAP[targetJob]?.[skill.id]}.description`,
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CareerPreference;
