import type { ActionItem, ActionItemList } from '@entities/todo';

import type { TodoActionsType } from './types';

const mergeItem = (current: ActionItem, next: ActionItem): ActionItem => ({
  actionItemId: next.actionItemId ?? current.actionItemId,
  title: next.title ?? current.title,
  deadline: next.deadline ?? current.deadline,
  completed: next.completed ?? current.completed,
});

const replaceInItems = (
  items: ActionItem[] | undefined,
  next: ActionItem,
): ActionItem[] | undefined =>
  items?.map((item) =>
    item.actionItemId === next.actionItemId ? mergeItem(item, next) : item,
  );

export const insertItem = (
  list: ActionItemList,
  item: ActionItem,
  actionsType: TodoActionsType,
): ActionItemList => {
  if (actionsType === 'VISA') {
    return {
      ...list,
      visaActionItems: [...(list.visaActionItems ?? []), item],
    };
  }

  return {
    ...list,
    careerActionItems: [...(list.careerActionItems ?? []), item],
  };
};

export const updateItem = (
  list: ActionItemList,
  item: ActionItem,
): ActionItemList => {
  if (item.actionItemId === undefined) {
    return list;
  }

  return {
    ...list,
    visaActionItems: replaceInItems(list.visaActionItems, item),
    careerActionItems: replaceInItems(list.careerActionItems, item),
  };
};

export const removeItem = (
  list: ActionItemList,
  actionItemId: number,
): ActionItemList => ({
  ...list,
  visaActionItems: list.visaActionItems?.filter(
    (item) => item.actionItemId !== actionItemId,
  ),
  careerActionItems: list.careerActionItems?.filter(
    (item) => item.actionItemId !== actionItemId,
  ),
});
