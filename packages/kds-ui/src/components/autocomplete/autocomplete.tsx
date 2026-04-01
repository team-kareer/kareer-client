import { useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from '@kds/icons';

import * as styles from './autocomplete.css';

export interface AutocompleteOption {
  code?: string;
  label?: string;
}

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onInputChange?: (value: string) => void;
  options: AutocompleteOption[];
  placeholder?: string;
  icon?: 'chevron' | 'search';
}

interface DropDownProps {
  options: AutocompleteOption[];
  onClick: (option: AutocompleteOption) => void;
}

const Autocomplete = ({
  value,
  onChange,
  onInputChange,
  options,
  placeholder,
  icon = 'chevron',
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const matched = options.find((option) => option.code === value);
    if (matched) {
      setInputValue(matched.label ?? '');
    } else {
      setInputValue('');
    }
  }, [value, options]);

  const filteredOptions = options.filter((option) =>
    option.label?.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange?.(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleOptionClick = (option: AutocompleteOption) => {
    onChange(option.code ?? '');
    setIsOpen(false);
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
          key={option.code}
          className={styles.option}
          onMouseDown={() => onClick(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
