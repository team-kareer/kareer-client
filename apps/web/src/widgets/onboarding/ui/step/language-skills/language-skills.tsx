import { FormAutocompleteField } from '@widgets/onboarding';
import { OnboardingStepTitle } from '@widgets/onboarding';
import { LANGUAGE_SKILLS_PLACEHOLDERS } from '@widgets/onboarding/constants/placeholders';
import { validateAutocompleteOption } from '@features/onboarding/model/validation';
import { FUNNEL_STEPS } from '@entities/onboarding';
import {
  ENGLISH_PROFICIENCY_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '@entities/onboarding/model/options';

import * as styles from './language-skills.css';

const LanguageSkills = () => {
  return (
    <section>
      <OnboardingStepTitle stepNumber={3} title={FUNNEL_STEPS[2]} />
      <div className={styles.inputContainer}>
        <FormAutocompleteField
          name="languageLevel"
          label="TOPIK / KIIP Level"
          rules={{
            required: 'Select your level',
            validate: (value) =>
              validateAutocompleteOption(value, LANGUAGE_LEVEL_OPTIONS),
          }}
          placeholder={LANGUAGE_SKILLS_PLACEHOLDERS.LANGUAGE_LEVEL}
          options={LANGUAGE_LEVEL_OPTIONS}
        />
        <FormAutocompleteField
          name="languageLevel"
          label="English Proficiency"
          rules={{
            required: 'Select your level',
            validate: (value) =>
              validateAutocompleteOption(value, ENGLISH_PROFICIENCY_OPTIONS),
          }}
          placeholder={LANGUAGE_SKILLS_PLACEHOLDERS.LANGUAGE_LEVEL}
          options={ENGLISH_PROFICIENCY_OPTIONS}
        />
      </div>
    </section>
  );
};

export default LanguageSkills;
