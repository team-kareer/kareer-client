import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '14px',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 8px 40px rgba(59, 110, 248, 0.08)',
});

export const tabs = style({
  display: 'flex',
  gap: '0.6rem',
  marginBottom: '1.4rem',
});

export const tab = recipe({
  base: {
    padding: '0.5rem 1.4rem',
    borderRadius: '99px',
    fontSize: '1.1rem',
    fontWeight: 600,
  },
  variants: {
    active: {
      true: {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.primary[500],
      },
      false: {
        color: themeVars.color.grayscale.gray700,
        backgroundColor: themeVars.color.grayscale.gray100,
      },
    },
  },
});

export const todoItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
  marginBottom: '0.3rem',
  padding: '0.8rem 1rem',
  borderRadius: '8px',
});

export const checkbox = style({
  flexShrink: 0,
});

export const todoName = recipe({
  base: {
    color: themeVars.color.grayscale.gray800,
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  variants: {
    completed: {
      true: {
        color: themeVars.color.grayscale.gray500,
        textDecoration: 'line-through',
      },
    },
  },
});

export const dueDate = recipe({
  base: {
    marginLeft: 'auto',
    color: themeVars.color.grayscale.gray500,
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  variants: {
    urgent: {
      true: {
        color: themeVars.color.pastel.kared_500,
        fontWeight: 600,
      },
    },
  },
});

export const completedBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '0.6rem',
  padding: '0.8rem 1rem',
  borderTop: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const completedCheck = style({
  color: themeVars.color.primary[500],
  fontSize: '1.3rem',
});

export const completedLabel = style({
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
  fontWeight: 600,
});

export const completedCount = style({
  marginLeft: 'auto',
  padding: '0.1rem 0.7rem',
  borderRadius: '99px',
  color: themeVars.color.primary[500],
  backgroundColor: themeVars.color.primary[100],
  fontSize: '1rem',
  fontWeight: 600,
});
