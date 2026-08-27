export type TodoDraft = {
  title: string;
  dueInDays: number | null;
};

export type TodoDraftError =
  | 'TITLE_REQUIRED'
  | 'DAYS_REQUIRED'
  | 'DAYS_INVALID';

export const DUE_DAYS_MIN = 1;

export const validateTodoDraft = (draft: TodoDraft): TodoDraftError | null => {
  if (draft.title.trim().length === 0) {
    return 'TITLE_REQUIRED';
  }

  if (draft.dueInDays === null) {
    return 'DAYS_REQUIRED';
  }

  if (!Number.isInteger(draft.dueInDays) || draft.dueInDays < DUE_DAYS_MIN) {
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

  // toISOString() (UTC 기준) -> KST에서 하루 앞당김
  const year = String(deadline.getFullYear()).padStart(4, '0');
  const month = String(deadline.getMonth() + 1).padStart(2, '0');
  const date = String(deadline.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};
