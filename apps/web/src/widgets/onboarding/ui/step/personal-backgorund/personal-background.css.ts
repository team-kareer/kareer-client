import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  paddingRight: '5.4rem',
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginBottom: '1.6rem',
});

export const title = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray800,
  marginBottom: '0.8rem',
});

export const infoList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const infoText = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
  paddingLeft: '1.5rem',
  position: 'relative',

  '::before': {
    content: '•',
    position: 'absolute',
    left: 0,
  },
});

export const check = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    color: themeVars.color.grayscale.gray700,
  },
  variants: {
    area: {
      container: {
        ...typography.body7_sb_14,
        gap: '0.8rem',
      },
      list: {
        gap: '0.4rem',
      },
    },
  },
});

export const checkItem = style({
  ...typography.cap2_m_12,
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  cursor: 'pointer',
});
