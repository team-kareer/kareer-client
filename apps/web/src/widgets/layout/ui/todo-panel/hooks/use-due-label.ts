import { useTranslation } from 'react-i18next';

import { getDueInDays } from '@entities/todo';

export const useDueLabel = () => {
  const { t } = useTranslation('todo');

  return (deadline: string) => {
    const dueInDays = getDueInDays(deadline);

    if (dueInDays === null) {
      return '';
    }

    if (dueInDays === 0) {
      return t('dueToday');
    }

    if (dueInDays < 0) {
      return t('overdue');
    }

    return t('dueIn', { count: dueInDays });
  };
};
