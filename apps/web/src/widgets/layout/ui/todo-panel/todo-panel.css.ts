import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

import { TODO_PANEL_ANCHOR } from '@shared/constants/TODO_PANEL_ANCHOR';

export const container = style({
  anchorName: TODO_PANEL_ANCHOR,

  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignSelf: 'flex-start',
  width: '25.6rem',
  padding: '2rem',
  margin: '1.6rem 0',
  gap: '1.6rem',
  maxHeight: 'calc(100% - 5.6rem)',
  overflowY: 'auto',

  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const title = style({
  ...typography.body1_sb_18,
  color: themeVars.color.grayscale.gray800,
});

export const tabList = style({
  display: 'flex',
  gap: '0.4rem',
});

export const tabPanel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginTop: '1.6rem',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
