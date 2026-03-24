import { ReactNode, useState } from 'react';
import { ArrowDownIcon } from '@kds/icons';

import * as styles from './dropdown.css';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  onSelect: (value: string) => void;
  options: DropdownOption[];
  icon?: ReactNode;
  children: ReactNode;
}

const Dropdown = ({ onSelect, options, icon, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onSelect(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon}
        {children}
        <ArrowDownIcon width={16} height={16} />
      </button>

      {isOpen && (
        <div className={styles.panel}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={styles.item}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
