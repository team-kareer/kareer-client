export type TodoDraft = {
  title: string;
  dueInDays: number | null;
};

export type TodoDraftError =
  | 'TITLE_REQUIRED'
  | 'TITLE_TOO_LONG'
  | 'DAYS_REQUIRED'
  | 'DAYS_INVALID';

export const TITLE_MAX_LENGTH = 255;

export const validateTodoDraft = (draft: TodoDraft): TodoDraftError | null => {
  const title = draft.title.trim();

  if (title.length === 0) {
    return 'TITLE_REQUIRED';
  }

  if (title.length > TITLE_MAX_LENGTH) {
    return 'TITLE_TOO_LONG';
  }

  if (draft.dueInDays === null) {
    return 'DAYS_REQUIRED';
  }

  if (!Number.isInteger(draft.dueInDays) || draft.dueInDays < 1) {
    return 'DAYS_INVALID';
  }

  return null;
};

export const daysToDeadline = (days: number): string => {
  const now = new Date();
  const deadline = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + days,
  );

  const year = String(deadline.getFullYear()).padStart(4, '0');
  const month = String(deadline.getMonth() + 1).padStart(2, '0');
  const date = String(deadline.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};
