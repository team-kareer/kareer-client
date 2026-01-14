import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';

import * as styles from './autocomplete.css';

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

interface DropDownProps {
  options: string[];
  onClick: (index: number) => void;
}

const Autocomplete = ({
  value,
  onChange,
  options,
  placeholder,
}: AutocompleteProps) => {
  // 드롭메뉴 열림 여부
  const [isOpen, setIsOpen] = useState(false);

  // 입력값 필터링
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(newValue.length > 0);
  };

  const handleOptionClick = (clickedOption: number) => {
    const selectedOption = filteredOptions[clickedOption];
    if (selectedOption) {
      onChange(selectedOption);
    }
    setIsOpen(false);
  };

  const handleFocusBlur = (isFocus: boolean) => {
    setIsOpen(isFocus);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>
        <input
          type="text"
          className={styles.input({ hasValue: value.length > 0 })}
          value={value}
          onChange={handleInputChange}
          onFocus={() => handleFocusBlur(true)}
          onBlur={() => handleFocusBlur(false)}
          placeholder={placeholder}
        />
        <button
          type="button"
          className={styles.iconWrapper}
          onClick={toggleDropdown}
          onBlur={() => handleFocusBlur(false)}
        >
          <Chevron width={19} height={19} className={styles.icon} />
        </button>
      </label>
      {isOpen && filteredOptions.length > 0 && (
        <DropList options={filteredOptions} onClick={handleOptionClick} />
      )}
    </div>
  );
};

const DropList = ({ options, onClick }: DropDownProps) => {
  return (
    <ul className={styles.dropdown}>
      {options.map((option, index) => (
        <li
          key={index}
          className={styles.option}
          onMouseDown={() => onClick(index)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
