import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';
import { Checkbox } from '@kds/ui';

import { useAccordion } from '@shared/hooks/useAccordion';

import * as styles from './accordion.css';

interface AccordionProps {
  title: string;
  content: string;
  isChecked: boolean;
  onToggle: () => void;
}

const Accordion = ({ title, content, isChecked, onToggle }: AccordionProps) => {
  const { isOpen, shouldRender, toggle } = useAccordion();
  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;
  return (
    // accordionItem
    <section className={styles.container}>
      {/* accordionTrigger */}
      <div className={styles.trigger}>
        <div className={styles.checkArea}>
          <Checkbox isChecked={isChecked} onClick={onToggle} />
          <span>{title}</span>
        </div>
        <Chevron
          width={16}
          height={16}
          className={styles.icon}
          onClick={toggle}
        />
      </div>

      {/* accordionContent */}
      <div className={styles.wrapper({ isOpen: isOpen })}>
        <div className={styles.inner}>
          {shouldRender && (
            <div className={styles.content}>
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
