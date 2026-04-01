import { AutocompleteOption } from '@kds/ui';

export const validateAutocompleteOption = (
  value: string | undefined,
  options: AutocompleteOption[],
): boolean => {
  if (!value) {
    return true;
  }
  return options.some((option) => option.code === value);
};
