import { type AutocompleteOption } from '@kds/ui';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { OnboardingForm } from '@entities/onboarding';

const MAX_SELECTED_FIELDS = 5;

export const useIndustryField = (fieldList: AutocompleteOption[]) => {
  const { t } = useTranslation('onboarding');
  const { control, setValue, setError, clearErrors } =
    useFormContext<OnboardingForm>();

  const selectedFields: string[] = useWatch({
    control,
    name: 'fieldsOfInterests',
    defaultValue: [],
  });

  const availableOptions = fieldList.filter(
    (field) => !selectedFields.includes(field.code ?? ''),
  );

  const handleSelectField = (code: string) => {
    if (!code || selectedFields.includes(code)) {
      return;
    }

    if (selectedFields.length >= MAX_SELECTED_FIELDS) {
      setError('fieldsOfInterests', {
        message: t(
          'steps.careerPreferences.fields.fieldsOfInterests.maxSelected',
        ),
      });
      return;
    }

    setValue('fieldsOfInterests', [...selectedFields, code], {
      shouldValidate: true,
    });
    clearErrors('fieldsOfInterests');
  };

  const handleRemoveField = (code: string) => {
    setValue(
      'fieldsOfInterests',
      selectedFields.filter((f) => f !== code),
      { shouldValidate: true },
    );
    clearErrors('fieldsOfInterests');
  };

  return {
    selectedFields,
    availableOptions,
    handleSelectField,
    handleRemoveField,
  };
};
