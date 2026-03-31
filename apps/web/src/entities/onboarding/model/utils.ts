import { AutocompleteOption } from '@kds/ui';

export const toOptions = (values: string[]): AutocompleteOption[] =>
  values.map((value) => ({ code: value, label: value }));
