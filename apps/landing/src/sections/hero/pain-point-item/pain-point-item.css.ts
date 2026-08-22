import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const painPoint = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.1rem 1.6rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
  color: themeVars.color.grayscale.gray800,
  backgroundColor: themeVars.color.grayscale.gray100,
  fontSize: '1.3rem',
  lineHeight: 1.6,
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: themeVars.color.primary[300],
    color: themeVars.color.primary[600],
    backgroundColor: themeVars.color.primary[100],
  },
});
