import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '0.8rem',
});

export const title = style({
  ...typography.body8_m_14,
  paddingBottom: '0.4rem',
  color: themeVars.color.grayscale.gray800,
});

export const description = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

export const textAreaWrapper = style({
  padding: '0 5.4rem 1.2rem 0',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  paddingRight: '5.4rem',
});

export const intoText = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const infoText = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray600,
});
