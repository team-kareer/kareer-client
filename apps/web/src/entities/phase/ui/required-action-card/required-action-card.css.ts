import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.2rem 1.6rem',
  borderRadius: '10px',
  gap: '1.2rem',
  backgroundColor: themeVars.color.grayscale.white,
});

export const content = style({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray900,
});

export const dueDate = style({
  ...typography.cap2_m_12,
  color: '#6B7281',
});
