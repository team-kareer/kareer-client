import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';

import { themeVars } from '../../styles';

import * as styles from './autocomplete.css';

const MAJOR_OPTIONS = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Mobile Developer',
  'UI/UX Designer',
  'Product Manager',
  'Scrum Master',
  'DevOps Engineer',
  'Data Scientist',
  'AI Engineer',
  'Cybersecurity Engineer',
  'Game Developer',
  'Blockchain Developer',
  'System Administrator',
  'Network Engineer',
  'Database Administrator',
  'Security Analyst',
];

interface DropDownProps {
  options: string[];
  onClick: (index: number) => void;
}

const Autocomplete = () => {
  // 입력값
  const [inputValue, setInputValue] = useState('');

  // 드롭메뉴 열림 여부
  const [isOpen, setIsOpen] = useState(false);

  // 입력값 필터링
  const filteredOptions = MAJOR_OPTIONS.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(value.length > 0);
  };

  const handleOptionClick = (clickedOption: number) => {
    setInputValue(filteredOptions[clickedOption] || '');
    setIsOpen(false);
  };

  const handleFocusBlur = (isFocus: boolean) => {
    setIsOpen(isFocus);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Target Job</p>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          <input
            type="text"
            className={styles.input({ hasValue: inputValue.length > 0 })}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => handleFocusBlur(true)}
            onBlur={() => handleFocusBlur(false)}
            placeholder="Enter your major"
          />
          <button
            type="button"
            className={styles.iconWrapper}
            onClick={toggleDropdown}
            onBlur={() => handleFocusBlur(false)}
          >
            {isOpen ? (
              <ArrowUpIcon
                width={19}
                height={19}
                color={themeVars.color.grayscale.gray800}
              />
            ) : (
              <ArrowDownIcon
                width={19}
                height={19}
                color={themeVars.color.grayscale.gray800}
              />
            )}
          </button>
        </label>
        {isOpen && filteredOptions.length > 0 && (
          <DropDown options={filteredOptions} onClick={handleOptionClick} />
        )}
      </div>
    </div>
  );
};

export const DropDown = ({ options, onClick }: DropDownProps) => {
  return (
    <div className={styles.dropdown}>
      {options.map((option, index) => (
        <div
          key={index}
          className={styles.option}
          onMouseDown={() => onClick(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Autocomplete;
