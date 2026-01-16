import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const onboardingSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4.8rem 0rem 4.8rem 6.6rem',
  backgroundColor: themeVars.color.primary[500],
});
