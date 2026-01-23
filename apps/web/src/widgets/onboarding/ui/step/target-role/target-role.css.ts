import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.1rem 2.4rem',
  paddingRight: '6.6rem',
});

export const autoWrapper = style({
  paddingBottom: '2.2rem',
});

export const lebelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
});

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
  paddingBottom: '0.8rem',
});

export const checkboxContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginTop: '-0.2rem',
});

export const checkboxWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'center',
  cursor: 'pointer',
});

export const checkboxContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const checkboxTitle = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray800,
});

export const checkboxDescription = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

export const errorMessage = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  marginTop: '0.8rem',
});
