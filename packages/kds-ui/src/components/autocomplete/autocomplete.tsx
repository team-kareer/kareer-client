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
  onClick: (option: string) => void;
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

  // 입력 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(newValue.length > 0);
  };

  // 옵션 선택 처리
  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder={placeholder}
      />
      <button type="button" className={styles.toggle} onClick={toggleDropdown}>
        <Chevron width={19} height={19} />
      </button>
      {isOpen && filteredOptions.length > 0 && (
        <DropList options={filteredOptions} onClick={handleOptionClick} />
      )}
    </div>
  );
};

const DropList = ({ options, onClick }: DropDownProps) => {
  return (
    <ul className={styles.dropdown}>
      {options.map((option) => (
        <li
          key={option}
          className={styles.option}
          onMouseDown={() => onClick(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
