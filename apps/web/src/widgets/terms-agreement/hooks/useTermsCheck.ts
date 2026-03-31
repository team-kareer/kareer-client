import { useState } from 'react';

import type { Term } from '@widgets/terms-agreement';

export const useTermsCheck = (terms: Term[]) => {
  const [checkedItems, setCheckedItems] = useState(() =>
    Object.fromEntries(terms.map(({ termId }) => [termId, false])),
  );
  const allChecked = terms.every((term) => checkedItems[term.termId]);

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
