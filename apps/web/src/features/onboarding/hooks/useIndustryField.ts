import { useFormContext, useWatch } from 'react-hook-form';

import { OnboardingForm } from '@entities/onboarding';

const MAX_SELECTED_FIELDS = 5;

export const useIndustryField = (fieldList: string[]) => {
  const { control, setValue, setError, clearErrors } =
    useFormContext<OnboardingForm>();

  const selectedFields: string[] = useWatch({
    control,
    name: 'fieldsOfInterests',
    defaultValue: [],
  });

  const availableOptions = fieldList.filter(
    (field) => !selectedFields.includes(field),
  );

  const handleSelectField = (field: string) => {
    if (!field || selectedFields.includes(field)) {
      return;
    }

    if (selectedFields.length >= MAX_SELECTED_FIELDS) {
      setError('fieldsOfInterests', {
        message: 'You can select up to 5 industries.',
      });
      return;
    }

    setValue('fieldsOfInterests', [...selectedFields, field], {
      shouldValidate: true,
    });
    clearErrors('fieldsOfInterests');
  };

  const handleRemoveField = (field: string) => {
    setValue(
      'fieldsOfInterests',
      selectedFields.filter((f) => f !== field),
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
