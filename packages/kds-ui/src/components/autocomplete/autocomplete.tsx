import { useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from '@kds/icons';

import * as styles from './autocomplete.css';
interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onInputChange?: (value: string) => void;
  options: string[];
  placeholder?: string;
  icon?: 'chevron' | 'search';
}

interface DropDownProps {
  options: string[];
  onClick: (option: string) => void;
}

const Autocomplete = ({
  value,
  onChange,
  onInputChange,
  options,
  placeholder,
  icon = 'chevron',
}: AutocompleteProps) => {
  // 드롭메뉴 열림 여부
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  // 입력값 필터링 (undefined/null 값 제거)
  const filteredOptions = options
    .filter((option) => option != null)
    .filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()),
    );

  // 입력 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange?.(newValue);
    setIsOpen(newValue.length > 0);
  };

  // 옵션 선택 처리
  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setInputValue('');
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      onChange(inputValue.trim());
      setIsOpen(false);
      setInputValue('');
    }
  };

  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;
  const Icon = icon === 'search' ? SearchIcon : Chevron;

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <button type="button" className={styles.toggle} onClick={toggleDropdown}>
        <Icon width={19} height={19} />
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
