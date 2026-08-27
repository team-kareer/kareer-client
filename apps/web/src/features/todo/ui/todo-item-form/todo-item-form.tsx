import {
  type KeyboardEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { TodoIcon } from '@kds/icons';
import { Trans, useTranslation } from 'react-i18next';

import {
  DUE_DAYS_MIN,
  TITLE_MAX_LENGTH,
  type TodoDraft,
  type TodoDraftError,
  validateTodoDraft,
} from '@features/todo/model';

import * as styles from './todo-item-form.css';

const ERROR_MESSAGES: Record<
  TodoDraftError,
  { key: string; options?: Record<string, number> }
> = {
  TITLE_REQUIRED: { key: 'form.error.titleRequired' },
  TITLE_TOO_LONG: {
    key: 'form.error.titleTooLong',
    options: { max: TITLE_MAX_LENGTH },
  },
  DAYS_REQUIRED: { key: 'form.error.daysRequired' },
  DAYS_INVALID: {
    key: 'form.error.daysInvalid',
    options: { min: DUE_DAYS_MIN },
  },
};

const DAYS_INPUT_MAX_LENGTH = 4;

const useAutoResize = (value: string) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    const textarea = ref.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, []);

  useLayoutEffect(resize, [resize, value]);

  return ref;
};

interface TodoItemFormProps {
  initialDraft: TodoDraft;
  onSubmit: (draft: TodoDraft) => void;
  onCancel: () => void;
}

const TodoItemForm = ({
  initialDraft,
  onSubmit,
  onCancel,
}: TodoItemFormProps) => {
  const { t } = useTranslation('todo');
  const [title, setTitle] = useState(initialDraft.title);
  const titleRef = useAutoResize(title);
  const [days, setDays] = useState(
    initialDraft.dueInDays === null ? '' : String(initialDraft.dueInDays),
  );
  const [errorKey, setErrorKey] = useState<TodoDraftError | null>(null);

  const toDraft = (): TodoDraft => ({
    title,
    dueInDays: days.trim() === '' ? null : Number(days),
  });

  const handleDaysChange = (value: string) => {
    setDays(value.replace(/[^0-9]/g, ''));
  };

  const handleSubmit = () => {
    const draft = toDraft();
    const nextErrorKey = validateTodoDraft(draft);

    setErrorKey(nextErrorKey);

    if (nextErrorKey !== null) {
      return;
    }

    onSubmit(draft);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) {
        return;
      }

      event.preventDefault();
      handleSubmit();
    }

    if (event.key === 'Escape') {
      onCancel();
    }
  };

  const errorMessage = errorKey
    ? t(ERROR_MESSAGES[errorKey].key, ERROR_MESSAGES[errorKey].options)
    : null;

  return (
    <li
      className={styles.container({ hasError: errorKey !== null })}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.checkboxPlaceholder} aria-hidden>
        <TodoIcon width={24} height={24} />
      </span>
      <div className={styles.content}>
        <textarea
          ref={titleRef}
          rows={1}
          className={styles.titleInput}
          value={title}
          placeholder={t('form.placeholder')}
          aria-label={t('form.titleLabel')}
          onChange={(event) => setTitle(event.target.value)}
        />
        <p className={styles.dueRow}>
          <Trans
            t={t}
            i18nKey="form.dueIn"
            components={{
              days: (
                <DaysField
                  value={days}
                  hasError={
                    errorKey === 'DAYS_REQUIRED' || errorKey === 'DAYS_INVALID'
                  }
                  label={t('form.daysLabel')}
                  onChange={handleDaysChange}
                />
              ),
            }}
          />
        </p>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </li>
  );
};

interface DaysFieldProps {
  value: string;
  hasError: boolean;
  label: string;
  onChange: (value: string) => void;
}

const DaysField = ({ value, hasError, label, onChange }: DaysFieldProps) => {
  return (
    <input
      type="text"
      inputMode="numeric"
      className={styles.daysInput({ hasError })}
      value={value}
      aria-label={label}
      maxLength={DAYS_INPUT_MAX_LENGTH}
      size={value.length || 1}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default TodoItemForm;
