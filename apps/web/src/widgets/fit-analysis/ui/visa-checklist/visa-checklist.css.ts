import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  minHeight: 0,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const title = style({
  ...typography.body4_sb_16,
  color: themeVars.color.grayscale.gray800,
});

export const subTitle = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray400,
});

export const checklist = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.8rem',
  padding: 0,
  flex: 1,
  overflowY: 'auto',
  minHeight: 0,
});
