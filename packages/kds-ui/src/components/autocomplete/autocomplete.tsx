import { useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';

import { color } from '../../styles';

import * as styles from './autocomplete.css';

export interface AutocompleteOption {
  code: string;
  label: string;
}

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  options: AutocompleteOption[];
  placeholder?: string;
}

interface DropDownProps {
  options: AutocompleteOption[];
  onClick: (option: AutocompleteOption) => void;
}

const Autocomplete = ({
  value,
  onChange,
  options,
  placeholder,
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const matched = options.find((option) => option.code === value);
    setInputValue(matched ? matched.label : '');
  }, [value, options]);

  const filteredOptions = options.filter((option) =>
    option.label?.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(e.target.value.length > 0);
    onChange('');
  };

  const handleOptionClick = (option: AutocompleteOption) => {
    setInputValue(option.label);
    onChange(option.code);
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
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder={placeholder}
      />
      <button type="button" className={styles.toggle} onClick={toggleDropdown}>
        <Chevron width={19} height={19} color={color.grayscale.gray800} />
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
