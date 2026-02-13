export const validateAutocompleteOption = (
  value: string | undefined,
  options: string[],
): boolean => {
  if (!value) {
    return true;
  }
  return options.includes(value);
};
