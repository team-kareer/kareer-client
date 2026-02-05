export const validateAutocompleteOption = (
  value: string | undefined,
  options: string[],
): true | string => {
  if (!value) {
    return true;
  }
  if (!options.includes(value)) {
    return 'Please select a valid option from the list.';
  }
  return true;
};
