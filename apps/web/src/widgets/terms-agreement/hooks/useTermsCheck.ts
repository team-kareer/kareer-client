import { useState } from 'react';

import { Term } from '@entities/terms';

export const useTermsCheck = (terms: Term[]) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(
    () => Object.fromEntries(terms.map(({ termId }) => [termId, false])),
  );
  const allChecked =
    terms.length > 0 && terms.every((term) => checkedItems[term.termId ?? 0]);

  const handleToggleAll = () => {
    setCheckedItems(
      Object.fromEntries(terms.map(({ termId }) => [termId, !allChecked])),
    );
  };
  const handleToggleItem = (termId: number) => {
    setCheckedItems((prev) => ({ ...prev, [termId]: !prev[termId] }));
  };

  return { checkedItems, allChecked, handleToggleAll, handleToggleItem };
};
