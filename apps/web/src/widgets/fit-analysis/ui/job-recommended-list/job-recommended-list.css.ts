import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const loaderWrapper = style({
  height: '30.2rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.gray200,
});
