import { useTranslation } from 'react-i18next';

import { FormAutocompleteField } from '@widgets/onboarding';
import { OnboardingStepTitle } from '@widgets/onboarding';
import { validateAutocompleteOption } from '@features/onboarding/model/validation';
import {
  ENGLISH_PROFICIENCY_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '@entities/onboarding';

import * as styles from './language-skills.css';

const LANGUAGE_LEVEL_LABEL_KEYS: Record<string, string> = {
  LEVEL_1: 'options.languageLevel.level1',
  LEVEL_2: 'options.languageLevel.level2',
  LEVEL_3: 'options.languageLevel.level3',
  LEVEL_4: 'options.languageLevel.level4',
  LEVEL_5: 'options.languageLevel.level5',
  'Not taken yet': 'options.languageLevel.notTakenYet',
};

const ENGLISH_LEVEL_LABEL_KEYS: Record<string, string> = {
  BEGINNER: 'options.englishLevel.beginner',
  INTERMEDIATE: 'options.englishLevel.intermediate',
  ADVANCED: 'options.englishLevel.advanced',
};

const LanguageSkills = () => {
  const { t } = useTranslation('onboarding');
  const languageLevelOptions = LANGUAGE_LEVEL_OPTIONS.map((value) => ({
    code: value,
    label: t(LANGUAGE_LEVEL_LABEL_KEYS[value] ?? value),
  }));
  const englishLevelOptions = ENGLISH_PROFICIENCY_OPTIONS.map((option) => ({
    ...option,
    label: t(ENGLISH_LEVEL_LABEL_KEYS[option.code] ?? option.label ?? ''),
  }));

  return (
    <section>
      <OnboardingStepTitle
        stepNumber={3}
        title={t('stepFlow.steps.languageSkills')}
      />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="languageLevel"
          label={t('steps.languageSkills.fields.languageLevel.label')}
          rules={{
            required: t('steps.languageSkills.fields.languageLevel.required'),
            validate: (value) =>
              validateAutocompleteOption(value, languageLevelOptions),
          }}
          placeholder={t(
            'steps.languageSkills.fields.languageLevel.placeholder',
          )}
          options={languageLevelOptions}
        />
        <FormAutocompleteField
          name="englishLevel"
          label={t('steps.languageSkills.fields.englishLevel.label')}
          rules={{
            required: t('steps.languageSkills.fields.englishLevel.required'),
            validate: (value) =>
              validateAutocompleteOption(value, englishLevelOptions),
          }}
          placeholder={t(
            'steps.languageSkills.fields.englishLevel.placeholder',
          )}
          options={englishLevelOptions}
        />
      </div>
    </section>
  );
};

export default LanguageSkills;
