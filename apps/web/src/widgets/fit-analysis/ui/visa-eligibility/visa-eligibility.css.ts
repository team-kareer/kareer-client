import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '43rem',
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const tabContainer = style({
  display: 'flex',
  gap: '0.8rem',
});

export const panelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  overflow: 'hidden',
});
