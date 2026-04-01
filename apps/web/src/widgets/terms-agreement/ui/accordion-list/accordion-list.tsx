import { Accordion } from '@widgets/terms-agreement';
import type { Term } from '@entities/terms';

import * as styles from './accordion-list.css';

interface AccordionListProps {
  terms: Term[];
  checkedItems: Record<number, boolean>;
  onToggle: (value: number) => void;
}

const AccordionList = ({
  terms,
  checkedItems,
  onToggle,
}: AccordionListProps) => {
  return (
    <section className={styles.container}>
      {terms.map((term) => (
        <Accordion
          key={term.termId}
          title={term.title ?? ''}
          content={term.content ?? ''}
          isChecked={checkedItems[term.termId ?? 0] ?? false}
          onToggle={() => onToggle(term.termId ?? 0)}
        />
      ))}
    </section>
  );
};

export default AccordionList;
