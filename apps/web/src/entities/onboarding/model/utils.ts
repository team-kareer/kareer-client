import { AutocompleteOption } from '@kds/ui';

export const toOptions = (values: readonly string[]): AutocompleteOption[] =>
  values.map((value) => ({ code: value, label: value }));
