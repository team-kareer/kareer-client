import type { ActionItem } from '@entities/todo';

export const unwrapActionItem = (data: ActionItem | undefined): ActionItem => {
  if (!data) {
    throw new Error('액션 아이템 응답이 비어 있습니다.');
  }

  return data;
};
