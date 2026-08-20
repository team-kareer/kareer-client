import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const card = style({
  padding: '2.4rem 2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '14px',
  backgroundColor: themeVars.color.grayscale.gray100,
  textAlign: 'left',
});

export const quote = style({
  ...typography.body9_r_14,
  marginBottom: '1.6rem',
  color: themeVars.color.grayscale.gray800,
  fontStyle: 'italic',
  lineHeight: 1.75,
});

export const meta = style({
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
  fontWeight: 500,
});
